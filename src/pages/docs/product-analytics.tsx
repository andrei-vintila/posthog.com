import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'

import docs from 'sidebars/docs.json'
import Layout from 'components/Layout'
import { SEO } from 'components/seo'
import PostLayout from 'components/PostLayout'
import { Tutorials } from 'components/Docs/Tutorials'
import { LinkGrid } from 'components/Docs/LinkGrid'
import { GettingStarted } from 'components/Docs/GettingStarted'

const quickLinks = [
    {
        name: 'Insights',
        to: '/docs/product-analytics/insights',
        description: 'Learn how to use PostHog to understand your users and product.',
    },
    {
        name: 'Identify users',
        to: '/docs/product-analytics/identify-users',
        description: 'Learn how to identify users in PostHog.',
    },
    {
        name: 'User properties',
        to: '/docs/product-analytics/user-properties',
        description: 'Learn how to use user properties in PostHog.',
    },
    {
        name: 'Group analytics',
        to: '/docs/product-analytics/group-analytics',
        description: 'Learn how to use PostHog to understand your users and product.',
    },
    {
        name: 'Toolbar',
        to: '/docs/product-analytics/toolbar',
        description: "Learn how to use PostHog's toolbar to understand your users and product.",
    },
    {
        name: 'Dashboards',
        to: '/docs/product-analytics/dashboards',
        description: 'Learn how to use PostHog to understand your users and product.',
    },
]

type ProductAnalyticsProps = {
    data: {
        tutorials: {
            nodes: {
                slug: string
                frontmatter: {
                    title: string
                    featuredImage: {
                        childImageSharp: {
                            gatsbyImageData: IGatsbyImageData
                        }
                    }
                }
            }[]
        }
    }
}

const ProductAnalytics: React.FC<ProductAnalyticsProps> = ({ data }) => {
    const { tutorials } = data
    return (
        <Layout>
            <SEO title="Documentation - PostHog" />

            <PostLayout title={'Product Analytics'} menu={docs} hideSurvey fullWidthContent={true}>
                <h1 className="text-4xl mb-2 mt-6">Product analytics</h1>
                <h3 className="text-lg text-gray">
                    Learn how to use PostHog to understand your users and build better products.
                </h3>

                {/* Get started section */}
                <section className="py-12">
                    <GettingStarted
                        product="Product analytics"
                        title="Start sending events"
                        description="Use our custom SDKs and integrations to send events from your favorite language or platform."
                        link="/docs/product-analytics/start-here"
                    >
                        <StaticImage
                            alt=""
                            placeholder="none"
                            quality={100}
                            className="w-[400px]"
                            src="../../components/Home/Slider/images/product-analytics-hog.png"
                        />
                    </GettingStarted>
                </section>

                {/* Quick links */}
                <section className="my-12">
                    <h3 className="mb-6 mt-0">Quick links</h3>
                    <LinkGrid links={quickLinks} />
                </section>

                <section className="my-12">
                    <h3 className="mb-6">Tutorials</h3>
                    <Tutorials tutorials={tutorials.nodes} />
                </section>
            </PostLayout>
        </Layout>
    )
}

export default ProductAnalytics

export const query = graphql`
    query ProductAnalytics {
        tutorials: allMdx(filter: { frontmatter: { featuredTutorial: { eq: true } } }) {
            nodes {
                slug
                frontmatter {
                    title
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(placeholder: NONE)
                        }
                    }
                }
            }
        }
    }
`
