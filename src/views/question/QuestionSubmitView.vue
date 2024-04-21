<template>
  <div id="questionSubmitView">
    <div :style="{ display: 'flex' }">
      <a-card :style="{ width: '100%' }">
        <a-typography-title :heading="5">History Record</a-typography-title>
        <a-divider />
        <a-form :model="searchParams" layout="inline">
          <a-form-item
            field="questionId"
            label="Quetsion ID"
            style="min-width: 240px"
          >
            <a-input
              v-model="searchParams.questionId"
              placeholder="Please input"
            />
          </a-form-item>
          <a-form-item
            field="language"
            label="Language"
            style="min-width: 240px"
          >
            <a-select
              v-model="searchParams.language"
              :style="{ width: '320px' }"
              placeholder="Choose Language"
            >
              <a-option>java</a-option>
              <a-option>cpp</a-option>
              <a-option>go</a-option>
              <a-option>html</a-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="doSubmit">
              <template #icon>
                <icon-search />
              </template>
            </a-button>
          </a-form-item>
        </a-form>
        <a-divider />
        <a-table
          :ref="tableRef"
          :columns="columns"
          :data="dataList"
          :pagination="{
            showTotal: true,
            pageSize: searchParams.pageSize,
            current: searchParams.current,
            total,
          }"
          @page-change="onPageChange"
        >
          <template #judgeInfo="{ record }">
            {{ JSON.stringify(record.judgeInfo) }}
          </template>
          <template #createTime="{ record }">
            {{ moment(record.createTime).format("YYYY-MM-DD") }}
          </template>
        </a-table>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import {
  Question,
  QuestionControllerService,
  QuestionSubmitQueryRequest,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import moment from "moment";
import { IconSearch } from "@arco-design/web-vue/es/icon";
const tableRef = ref();

const dataList = ref([]);
const total = ref(0);
const searchParams = ref<QuestionSubmitQueryRequest>({
  questionId: undefined,
  language: undefined,
  pageSize: 10,
  current: 1,
});

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionSubmitByPageUsingPost(
    {
      ...searchParams.value,
      sortField: "createTime",
      sortOrder: "descend",
    }
  );
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
  } else {
    message.error("加载失败，" + res.message);
  }
};

/**
 * 监听 searchParams 变量，改变时触发页面的重新加载
 */
watchEffect(() => {
  loadData();
});

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

const columns = [
  {
    title: "Submit ID",
    dataIndex: "id",
  },
  {
    title: "Language",
    dataIndex: "language",
  },
  {
    title: "Judge Info",
    slotName: "judgeInfo",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Question id",
    dataIndex: "questionId",
  },
  {
    title: "User ID",
    dataIndex: "userId",
  },
  {
    title: "Create Time",
    slotName: "createTime",
  },
];

const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};

const router = useRouter();

/**
 * 跳转到做题页面
 * @param question
 */
const toQuestionPage = (question: Question) => {
  router.push({
    path: `/view/question/${question.id}`,
  });
};

/**
 * 确认搜索，重新加载数据
 */
const doSubmit = () => {
  // 这里需要重置搜索页号
  searchParams.value = {
    ...searchParams.value,
    current: 1,
  };
};
</script>

<style scoped>
#questionSubmitView {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
