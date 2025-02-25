import { CallToAction } from 'components/CallToAction/index.tsx'
import { SEO } from 'components/seo'
import React from 'react'
import Layout from 'components/Layout'
import { SignupCTA } from 'components/SignupCTA'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function BookADemo() {
    return (
        <Layout>
            <SEO title="Book a demo – PostHog" />
            <section className="px-4 lg:pb-12 py-4 max-w-6xl mx-auto flex flex-col">
                <header className="flex flex-col md:flex-row justify-between md:items-center pb-4 order-1">
                    <div>
                        <h1 className="text-4xl mt-0 mb-2">Watch a demo</h1>
                        <p className="md:m-0 p-0">
                            PostHog Cloud is 100% self-serve. Check out the demo below and sign up to kick the tires.
                        </p>
                    </div>
                    <aside className="flex space-x-4">
                        <SignupCTA>Get started - free</SignupCTA>
                        {/* <CallToAction type="secondary" to="/contact-sales">
                            Talk to sales
                        </CallToAction> */}
                    </aside>
                </header>
                <div className="border border-gray-accent-light border-dashed rounded p-4 flex space-x-4 mb-4 order-3 md:order-2">
                    <span className="bg-blue rounded-full leading-none flex h-12 w-12 overflow-hidden shrink-0 basis-12">
                        <StaticImage
                            src="../images/simon.png"
                            width={60}
                            height={60}
                            alt="Simon"
                            className="h-full w-full"
                        />
                    </span>

                    <div className="md:flex items-center md:space-x-4">
                        <p className="mb-2 md:mb-0 text-[15px]">
                            <Link to="/handbook/company/team#simon-fisher-customer-success">Simon Fisher</Link>, our
                            Customer Success Lead, made this demo video. If you have bespoke needs that aren't covered
                            here, he's happy to chat.
                        </p>

                        <CallToAction type="secondary" to="/contact-sales" className="whitespace-nowrap">
                            Request a call
                        </CallToAction>
                    </div>
                </div>
                <iframe
                    src="https://www.youtube-nocookie.com/embed/BPDmpepEwSY"
                    className="rounded shadow-xl order-2 md:order-3"
                />
            </section>
        </Layout>
    )
}
