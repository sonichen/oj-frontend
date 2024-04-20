<!-- eslint-disable vue/valid-v-for -->
<template>
  <div id="questionsView">
    <div :style="{ display: 'flex' }">
      <a-card :style="{ width: '100%' }">
        <a-typography-title :heading="5">Study Plan</a-typography-title>
        <div :style="{ display: 'flex' }">
          <a-card class="card-demo" hoverable :style="{ width: '360px' }">
            <template #cover>
              <div
                :style="{
                  height: '204px',
                  overflow: 'hidden',
                }"
              >
                <img
                  :style="{ width: '100%', transform: 'translateY(-20px)' }"
                  alt="dessert"
                  src="data:image/png;base64,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"
                />
              </div>
            </template>
            <a-card-meta title="Top Interview 150" style="text-align: center">
              <template #description
                ><a href="https://leetcode.com/studyplan/top-interview-150/"
                  >Must-do List for Interview Prep</a
                >
              </template>
            </a-card-meta>
          </a-card>
          <a-card class="card-demo" hoverable :style="{ width: '360px' }">
            <template #cover>
              <div
                :style="{
                  height: '204px',
                  overflow: 'hidden',
                }"
              >
                <img
                  :style="{ width: '100%', transform: 'translateY(-20px)' }"
                  alt="dessert"
                  src="data:image/png;base64,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"
                />
              </div>
            </template>
            <a-card-meta title="SQL 50" style="text-align: center">
              <template #description
                ><a href="https://leetcode.com/studyplan/top-sql-50/"
                  >Crack SQL Interview in 50Qs</a
                >
              </template>
            </a-card-meta>
          </a-card>
          <a-card class="card-demo" hoverable :style="{ width: '360px' }">
            <template #cover>
              <div
                :style="{
                  height: '204px',
                  overflow: 'hidden',
                }"
              >
                <img
                  :style="{ width: '100%', transform: 'translateY(-20px)' }"
                  alt="dessert"
                  src="data:image/png;base64,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"
                />
              </div>
            </template>
            <a-card-meta
              title="30 Days of JavaScript"
              style="text-align: center"
            >
              <template #description
                ><a href="https://leetcode.com/studyplan/30-days-of-javascript/"
                  >Learn JS Basic with 30 Qs</a
                >
              </template>
            </a-card-meta>
          </a-card>
        </div>
        <a-divider />
        <a-typography-title :heading="5">Questions List</a-typography-title>
        <div style="margin-bottom: 5px">
          <a-form :model="searchParams" layout="inline">
            <a-form-item field="title" label="Title" style="min-width: 240px">
              <a-input
                v-model="searchParams.title"
                placeholder="Please input title..."
              />
            </a-form-item>
            <a-form-item field="tags" label="Tag" style="min-width: 240px">
              <a-input-tag
                v-model="searchParams.tags"
                placeholder="Please input tag"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="doSubmit">
                <template #icon>
                  <icon-search />
                </template>
              </a-button>
            </a-form-item>
          </a-form>
        </div>
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
          <template #tags="{ record }">
            <a-space wrap>
              <a-tag
                v-for="(tag, index) of record.tags"
                :key="index"
                color="green"
                >{{ tag }}
              </a-tag>
            </a-space>
          </template>
          <template #acceptedRate="{ record }">
            {{
              `${
                record.submitNum ? record.acceptedNum / record.submitNum : "0"
              }% (${record.acceptedNum}/${record.submitNum})`
            }}
          </template>
          <template #createTime="{ record }">
            {{ moment(record.createTime).format("YYYY-MM-DD") }}
          </template>
          <template #optional="{ record }">
            <a-space>
              <a-button type="primary" @click="toQuestionPage(record)">
                Start
              </a-button>
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
  QuestionQueryRequest,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import * as querystring from "querystring";
import { useRouter } from "vue-router";
import moment from "moment";
import { IconSearch } from "@arco-design/web-vue/es/icon";

const tableRef = ref();

const dataList = ref([]);
const total = ref(0);
const searchParams = ref<QuestionQueryRequest>({
  title: "",
  tags: [],
  pageSize: 8,
  current: 1,
});

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionVoByPageUsingPost(
    searchParams.value
  );
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
  } else {
    message.error("Loading fail..." + res.message);
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
    title: "Tag",
    slotName: "tags",
  },
  {
    title: "Accepted Rate",
    slotName: "acceptedRate",
  },
  {
    title: "Create Time",
    slotName: "createTime",
  },
  {
    slotName: "optional",
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
const images = [
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
];
</script>

<style scoped>
#questionsView {
  max-width: 1280px;
  margin: 0 auto;
}
.card-demo {
  width: 360px;
  margin-left: 24px;
  transition-property: all;
}
.card-demo:hover {
  transform: translateY(-4px);
}
</style>
