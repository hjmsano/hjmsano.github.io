<template>
    <div class="container">
        <section class="section has-text-left">
            <h3 class="title is-4 underline">Digital Analytics & Data Marketing</h3>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-12">
                    <div class="tile">
                        <div class="tile is-parent is-4">
                            <article class="tile is-child has-text-left">
                                <h4 class="title is-5 is-child">Ingestly</h4>
                                <p class="article">Ingestly is the fastest & easiest web analytics tool for in-house style implementation. It does not requires you to manage the infrastructure because Ingestly coordinate everything the data ingestion from your website to BigQuery through Fastly.</p>
                                <ul>
                                    <li class="link"><a href="https://github.com/ingestly/ingestly-endpoint">Ingestion Endpoint</a></li>
                                    <li class="link"><a href="https://github.com/ingestly/ingestly-client-javascript">Client SDK for JS</a></li>
                                    <li class="link"><a href="https://github.com/ingestly/ingestly-chrome-debugger">Debugger for Chrome</a></li>
                                </ul>
                            </article>
                        </div>
                        <div class="tile is-parent is-4">
                            <article class="tile is-child has-text-left">
                                <h4 class="title is-5 is-child">Polytrek</h4>
                                <p class="article">The realtime stream data processing toolkit for digital marketing. (still early stage in development)</p>
                                <ul>
                                    <li class="link"><a href="https://github.com/polytrek/polytrek-client-js">Client SDK for JS</a></li>
                                </ul>
                            </article>
                        </div>
                        <div class="tile is-parent is-4">
                            <article class="tile is-child has-text-left">
                                <h4 class="title is-5 is-child">Atlas</h4>
                                <p class="article">When I work for the large media company, I invented the realtime stream data processing platform for digital marketing and built it on AWS. The code is partially public now.</p>
                                <ul>
                                    <li class="link"><a href="https://github.com/Nikkei/atlas-tracking-js">Atlas Tracking JS</a></li>
                                </ul>
                            </article>
                        </div>

                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-12">
                    <div class="tile">
                        <div class="tile is-parent is-4">
                            <article class="tile is-child has-text-left">
                                <h4 class="title is-5 is-child">Treasure Data</h4>
                                <p class="article">Some utilities available in Treasure Data's official repositories. JS related repos are unofficial but are linked from <a href="https://boxes.treasuredata.com">Treasure Box.</a> (at your own risk)</p>
                                <ul>
                                    <li class="link"><a href="https://github.com/treasure-data/treasure-boxes/tree/master/tool-box/job-monitoring">Job Monitoring in Treasure Box</a></li>
                                    <li class="link"><a href="https://github.com/treasure-data/treasure-boxes/tree/master/integration-box/twitter-search">Twitter Search Archiver in Treasure Box</a></li>
                                    <li class="link"><a href="https://github.com/hjmsano/td-js-sdk-neo">Alternative JS SDK using sendBeacon</a></li>
                                    <li class="link"><a href="https://github.com/hjmsano/td-js-sdk-extension">Extension for TD-JS-SDK</a></li>
                                    <li class="link"><a href="https://github.com/hjmsano/td-chrome-debugger">Debugger for Chrome</a></li>
                                </ul>
                            </article>
                        </div>
                        <div class="tile is-parent is-4">
                            <article class="tile is-child has-text-left">
                                <h4 class="title is-5 is-child">Twitter Analysis</h4>
                                <p class="article">Marketers want to analyze tweets which contain keywords or links related to their brands. To get the trend data or to visualize tweets by aggregating some variables, it's better if tweets are stored in Elasticsearch. So I created scripts to accumulate tweets from Twitter Search API and prepared Docker images to help you build the environment.</p>
                                <ul>
                                    <li class="link"><a href="https://github.com/hjmsano/twitter-elasticsearch-logger">Twitter Elasticsearch Logger</a></li>
                                    <li class="link"><a href="https://github.com/hjmsano/elasticsearch-docker-ec2">Elasticsearch Container for EC2</a></li>
                                    <li class="link"><a href="https://github.com/hjmsano/nginx-kibana-auth-docker">Nginx for Kibana Basic Auth</a></li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section has-text-left">
            <h3 class="title is-4 underline">Hobby</h3>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-12">
                    <div class="tile">
                        <div class="tile is-parent is-4">
                            <article class="tile is-child has-text-left">
                                <h4 class="title is-5 is-child">Google Home to speak Slack message</h4>
                                <p class="article">Do you wish to make your Google Home actively speak? By using the following two scripts (or Docker images), your Google Home will read and speak the message posted to specified channels on Slack. The device is Google Home but the voice is generated by Amazon Polly. I tested these on Mac, Raspberry Pi and Synology.</p>
                                <ul>
                                    <li class="link"><a href="https://github.com/hjmsano/google-home-amazon-polly-bridge">Google Home - Amazon Polly bridge</a></li>
                                    <li class="link"><a href="https://github.com/hjmsano/slack-google-home-bridge">Slack - Google Home bridge</a></li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style>
    .article {
        line-height: 160%;
        margin-bottom: 20px;
    }
    .link {
        line-height: 200%;
        list-style-position: inside;
        list-style-type: square;
    }
    .underline {
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
</style>