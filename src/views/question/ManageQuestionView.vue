<template>
  <div id="manageQuestionView">
    <div :style="{ display: 'flex' }">
      <a-card :style="{ width: '100%' }">
        <a-typography-title :heading="5">Questions List</a-typography-title>
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
          <template #optional="{ record }">
            <a-space>
              <a-button type="primary" @click="doUpdate(record)">
                Update</a-button
              >
              <a-button status="danger" @click="doDelete(record)"
                >Delete</a-button
              >
            </a-space>
          </template>
        </a-table>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import {
  Page_Question_,
  Question,
  QuestionControllerService,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import * as querystring from "querystring";
import { useRouter } from "vue-router";

const tableRef = ref();

const dataList = ref([]);
const total = ref(0);
const searchParams = ref({
  pageSize: 10,
  current: 1,
});

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionByPageUsingPost(
    searchParams.value
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

// {id: "1", title: "A+ D", content: "新的题目内容", tags: "["二叉树"]", answer: "新的答案", submitNum: 0,…}

const columns = [
  {
    title: "Question ID",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Content",
    dataIndex: "content",
  },
  {
    title: "Tag",
    dataIndex: "tags",
  },
  {
    title: "Answer",
    dataIndex: "answer",
  },
  {
    title: "Submit Number",
    dataIndex: "submitNum",
  },
  {
    title: "Accepted Number",
    dataIndex: "acceptedNum",
  },
  {
    title: "Judge Config",
    dataIndex: "judgeConfig",
  },
  {
    title: "Judege Case",
    dataIndex: "judgeCase",
  },
  {
    title: "User ID",
    dataIndex: "userId",
  },
  {
    title: "Create Time",
    dataIndex: "createTime",
  },
  {
    title: "Operation",
    slotName: "optional",
  },
];

const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};

const doDelete = async (question: Question) => {
  const res = await QuestionControllerService.deleteQuestionUsingPost({
    id: question.id,
  });
  if (res.code === 0) {
    message.success("删除成功");
    loadData();
  } else {
    message.error("删除失败");
  }
};

const router = useRouter();

const doUpdate = (question: Question) => {
  router.push({
    path: "/update/question",
    query: {
      id: question.id,
    },
  });
};
</script>

<style scoped>
#manageQuestionView {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
