<template>
	<Layout>
		<h1>Blog</h1>
		<article v-for="(edge, index) in $page.allPost.edges" :key="edge.node.id" style="margin-bottom: 2em;">
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
		<Pager :info="$page.allPost.pageInfo" linkClass="pager" />
		</Layout>
</template>

<page-query>
	query ($page: Int, $tairea: String) {
		allPost (filter: {author: {eq: $tairea}}, perPage: 5, page: $page) @paginate {
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node  {
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
</page-query>

<script>
	import {Pager} from 'gridsome'

	export default {
		components: {
			Pager
		},
		metaInfo: {
			title: 'Blog'
		}
	}
</script>

<style>
	.pager {
		font-size: 1.5rem;
		letter-spacing: 0.5px;
		padding: 40px 20px;
	}
</style>