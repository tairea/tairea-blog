<template>
    <Layout>
        <h1>#{{$page.tag.title}}</h1>

        <article v-for="(edge, index) in $page.tag.belongsTo.edges" :key="edge.node.id" style="margin-bottom: 2em;">
			<g-image :src="edge.node.cover_image" style="width:100%;"/>
			<!-- <div v-html="edge.node.content"/> -->
			<div style="margin: 2em;">
				<p style="margin:0;">{{edge.node.date}}</p>
				<h2>{{edge.node.title}}</h2>
				<!-- <p>	{{edge.node.timeToRead}} min read</p> -->
				<p>{{edge.node.excerpt}}</p>
				<div style="margin-top: 2em">
					<g-link v-for="(tag, index) in edge.node.tags" :key="tag.id" :to="tag.path" style="padding-right: 25px;">#{{tag.id}}</g-link>
				</div>
				<div style="margin-top: 1em">
					<g-link :to="edge.node.path">Read Post</g-link>
				</div>
			</div>
		</article>
    </Layout>
</template>

<page-query>
    query ($id: String!) {
        tag (id: $id) {
         title
         belongsTo {
           edges {
             node {
               ... on Post {
                id
                title
                excerpt
                content
                date (format: "dddd Do MMMM YYYY")
                author
                tags {
                    id
                    path
                }
                timeToRead
                path
                cover_image (width: 1000, height: 300, blur: 50)
               }
             }
           }
         }
       }
    }    
</page-query>

