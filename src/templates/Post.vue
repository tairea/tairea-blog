<template>
    <Layout>
        <div v-html="$page.post.content"/>
    </Layout>
</template>

<page-query>
    query ($path: String!)  {
        post(path: $path) {
        content
      }
    }
</page-query>