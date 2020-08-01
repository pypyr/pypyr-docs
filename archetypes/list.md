---
title: _index section title
linktitle: _index title
date: {{ .Date }}
description: description of section here
draft: false
# categories: [ category1, category2 ]
# keywords: ""
# topics: [topic1, topic2, topic3]
# menu:
#   replace-with-menu-name:
#     parent: section-id
#     name: section title here
# date_format: 2006-01-02
# list_fields:
#   - fallback: title
#     heading: title
#     islink: true
#     field: linktitle
#   - heading: description
#     field: description
# list_include_date: false
# list_limit: 0 only list top/max n pages in list page.
# list_pages_to_list: all, regular-only, section-regular-children or regular-recursive. defaults all.
# list_paginate: 100
# list_show_auto_description: true
# list_show_auto_title: true 
# list_show_section_tabs: false
# list_show_table_heading: true
# list_show_top_level_section_tabs: false
# list_sort: lists/sort/weight-linktitle.html
# list_sort_group_by_param: group by property name for list_sort = lists/sort/group-by-param.html 
# list_sort_param: order by property name for list_sort = lists/sort/group-by-param.html or lists/sort/param.html
# list_style: section-list/table
# page_show_auto_description: true
# page_show_auto_title: true
# show_auto_heading_only_on_empty_content: true
# seo_article_author_url: https://author/home
# seo_article_author_same_as: 
# - https://twitter.com/author
# - https://github.com/author
# seo_article_enable_for_this_page: true
seo_article_headline: {{ .Name }} -- max 110 chars. if blank fall back to .Title.
# seo_article_image: 
#     - url: images/1x1/article-img.png
#         height: 1200
#         width: 1200
#     - url: images/4x3/article-img.png
#         height: 900
#         width: 1200
#     - url: images/16x9/article-img.png
#         height: 675
#         width: 1200
# seo_article_keywords: abc, def, ghi
# seo_article_type: TechArticle # or Article
seo_description: max 158. for google serp snippet. if blank falls back to description.
# seo_is_carousel: false
# social_enable: true
# social_enable_strict_validate: true
# social_og_description: Description for social sharing here, max 200 chars. if not set, falls back to seo_description, then .Description
# social_og_image: images/2x1/social-sharing-img.png
# social_og_image_alt: image alt here. max 420.  
# social_og_image_height: 13
# social_og_image_width: 12
# social_og_image_type: image/jpeg
# social_og_site_name: og site name
# social_og_title: social sharing title here. Max 70 chars. If blank fall back to seo_article_headline > .Title.
# social_og_type: "website" # article or website or video.movie
# social_twitter_card: summary_large_image # summary_large_image or summary
# social_twitter_site: "@site-twitter-id" maybe set me in config.yaml
# social_twitter_creator: "@creator-twitter-id"
# social_twitter_description: twitter description here max 200. Falls back to social_og_description.
# social_twitter_title: title here 50-70 chars, max 70. Falls back to social_og_title.
# social_twitter_image: url/here.png - falls backs to social_og_image.
#   Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported
# social_twitter_image_alt: alt text for image max 420
# social_og_description: 200 chars, if blank fall back to seo_description then description
---
# section title here