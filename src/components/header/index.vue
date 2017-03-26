<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div class="support" v-if="seller.supports">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div class="support-count" v-if="seller.supports" @click="showDetail">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
		<div class="detail" v-show="detailShow">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
				</div>
			</div>
			<div class="detail-close">
				<i class="icon-close"></i>
			</div>
		</div>
	</div>
</template>

<script>
  import star from '@/components/star'

	export default {
	  data () {
	    return {
	      detailShow: false
	    }
	  },
	  methods: {
	    showDetail () {
	      this.detailShow = true
	    }
	  },
	  props: {
	    seller: {
	      type: Object
	    }
	  },
	  created () {
	    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	  },
    components: {
	    star
    }

	}

</script>

<style lang="scss">
	@import "../../common/scss/mixins.scss";
  .header {
  	position: relative;
  	color: #fff;
  	background: rgba(7, 17, 27, .5);
  	overflow: hidden;
  	.content-wrapper {
  		position: relative;
			padding: 24px 12px 18px 24px;
			font-size: 0;
			.avatar {
				display: inline-block;
				vertical-align: top;
				img {
					border-radius: 2px;
				}
			}
			.content {
				display: inline-block;
				margin-left: 16px;
				margin-top: 2px;
				font-size: 12px;
				.title {
					font-size: 0;
					.brand {
						display: inline-block;
						width: 30px;
						height: 18px;
						background-size: 30px 18px;
						@include bg-image("brand");
						vertical-align: top;
					}
					.name {
						margin-left: 6px;
						font-size: 16px;
						font-weight: bold;
						line-height: 18px;
					}
				}
				.description {
					margin-top: 8px;
					margin-bottom: 10px;
					font-size: 12px;
					font-weight: 200;
					line-heighe: 1;
				}
				.support {
					font-size: 0;
					.icon {
						display: inline-block;
						width: 12px;
						height: 12px;
						margin-right: 4px;
						background-size: 12px 12px;
						vertical-align: top;
						&.decrease {
							@include bg-image("decrease_1");
						}
						&.discount {
							@include bg-image("discount_1");
						}
						&.guarantee {
							@include bg-image("guarantee_1");
						}
						&.invoice {
							@include bg-image("invoice_1");
						}
						&.special {
							@include bg-image("special_1");
						}
					}
					.text {
						font-size: 10px;
						color: #fff;
						font-weight: 200;
						line-height: 12px;
					}
				}
			}
			.support-count {
				position: absolute;
				right: 12px;
				bottom: 18px;
				padding: 0 8px;
				height: 24px;
				line-height: 24px;
				border-radius: 8px/7px;
				background-color: rgba(0, 0, 0, .2);
				text-align: center;
				.count {
					margin-right: 2px;
					vertical-align: top;
					font-size: 10px;
				}
				.icon-keyboard_arrow_right {
					font-size: 10px;
					line-height: 24px;
				}
			}
  	}
  	.bulletin-wrapper {
  		position: relative;
  		height: 28px;
  		line-height: 28px;
  		padding: 0 22px 0 12px;
  		white-space: nowrap;
  		overflow: hidden;
  		text-overflow: ellipsis;
  		background: rgba(7, 17, 27, .2);
  		.bulletin-title {
  			display: inline-block;
  			margin-top: 8px;
  			width: 22px;
  			height: 12px;
  			vertical-align: top;
  			background-size: 22px 12px;
  			@include bg-image("bulletin");
  		}
  		.bulletin-text {
  			line-height: 28px;
  			vertical-align: top;
  			margin: 0 4px;
  			font-size: 10px;
  			font-weight: 200px;
  		}
  		.icon-keyboard_arrow_right {
  			position: absolute;
  			right: 12px;
  			top: 8px;
				font-size: 10px;
			}
  	}
  	.background {
  		position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			filter: blur(10px);
  	}
  	.detail {
  		position: fixed;
  		top: 0;
  		left: 0;
  		z-index: 100;
  		width: 100%;
  		height: 100%;
  		overflow: auto;
  		background-color: rgba(7, 17, 27, .8);
  		.detail-wrapper {
  			min-height: 100%;
  			width: 100%;
  			.detail-main {
  				margin-top: 64px;
  				padding-bottom: 64px;
  				.name {
  					line-height: 16px;
  					text-align: center;
  					font-size: 16px;
  					font-weight: 700;
  				}
  			}
  		}
  		.detail-close {
  			position: relative;
  			width: 32px;
  			height: 32px;
  			margin: -64px auto 0 auto;
  			clear: both;
  			font-size: 32px;
  		}
  	}
  }
</style>
