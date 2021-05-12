<!DOCTYPE html>
<html lang="en">

<head>
    <title>Twitch Chat Visualization</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset=”utf-8″>
    <title>Embedded Analytics with Tableau</title>
    <!-- Load Require CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font CSS -->
    <link href="assets/css/boxicon.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <!-- Load Tempalte CSS -->
    <link rel="stylesheet" href="assets/css/templatemo.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/custom.css">

    <!-- CSS for the Scrolling Viz-->
    <link rel="stylesheet" type="text/css" href="assets/css/d3style.css"/>
<!--

TemplateMo 561 Purple Buzz

https://templatemo.com/tm-561-purple-buzz

-->
</head>

<body>
    <!-- Header -->

    <!-- Start Banner Hero -->
    <div class="banner-wrapper bg-light">
        <div id="index_banner" class="banner-vertical-center-index container-fluid pt-5">

          <div class="py-5 row d-flex align-items-center">

              <div class="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                <a class="col" data-type="image" href="./assets/img/twitch.png">
                    <img class="img-fluid" src="./assets/img/twitch.png" width=400>
                </a>
                <div class="feature-work container my-4"></div>

                  <h1 class="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      <strong>Twitch Chat Visualization</strong>
                      <br>a sentiment analysis project</br>
                </h1>
                <div class="feature-work container my-4"></div>

                  <h2 class="h3 text-left col-12 semi-bold-600" >To This Date, Over 77,342,869,601 Twitch Chat Messages Have Been Sent On The Platform</h2>
                  <div class="feature-work container my-4"></div>

                  <h2 class="h3 text-left col-12 semi-bold-600" >About 957 Chat Messages Are Sent Per Second</h2>
              </div>
          </div>


        </div>
    </div>
    <!-- End Banner Hero -->

    <!-- Start Inspiration -->
    <section class="service-wrapper py-3">
        <div class="container-fluid pb-3">
          <div class="feature-work container my-4"></div>
            <div class="row">
                <h2 class="h2 text-center col-12 semi-bold-600">Why Twitch Chat?</h2>
                <div class="row">
                    <div class="col-md-8 m-auto text-left justify-content-center">
                        <p class="pt-5 text-muted light-300">
                          We’re interested in exploring the interactive chat culture of one of the most popular streaming platforms, Twitch.
                          With the immense customizability of features and contents, as well as the means of engagement, Twitch chat allows the users to not only be
                          the passive viewer of streams, but active participants with the streamers and the fellow members of the community as well.
                          This very essential part of the Twitch experience is the core to the video games communities on the platform, however often times harmed
                          by toxic chat behaviors.
                        </p>

                    </div>
                </div>
                <div class="row">
                <div class="feature-work container my-4"></div>
                <div class="col-md-8 m-auto text-left justify-content-center">
                  <h2 class="h2 text-center semi-bold-600">With this visualization, we want to</h2>
                  </div>
                <div class="feature-work container my-4"></div>

                <div class="row">
                    <div class="col-md-8 m-auto text-left justify-content-center">
                        <p class="display-6 py-4 ps-4 border border-5 border-top-0 border-end-0 border-bottom-0 border-start">
                            <i>
                              Allow for deeper understandings of Twitch chat culture and conversations around different aspects of chat elements.
                              </i>
                        </p>
                        <p class="display-6 py-4 ps-4 border border-5 border-top-0 border-end-0 border-bottom-0 border-start">
                            <i>
                              Find meaningful relationships between toxicity in chats and Twitch engagements.
                              </i>
                        </p>
                        <p class="display-6 py-4 ps-4 border border-5 border-top-0 border-end-0 border-bottom-0 border-start">
                            <i>
                              Give the general public an understanding of livestreaming culture and the issues involved.
                            </i>
                        </p>

                    </div>
                </div>
        </div>
    </section>
    <!-- End Inspiration -->

    <!-- Start Method -->


    <!-- Start Chat Analyzing Viz-->
    <!-- Start Individual Viz -->
    <section class="service-wrapper py-3">
        <div class="container-fluid pb-3">
            <div class="row">

                <h2 class="h2 text-center col-12 py-5 semi-bold-600">An Interactive Introduction</h2>
                <div class="row">
                    <div class="col-md-8 m-auto text-left justify-content-center">
                        <p class="pt-5 text-muted light-300">
                            Let's take a closer look at what goes into a Twitch chat messsage and how we might extract a sentiment from it. </p>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-8 m-auto text-left justify-content-center">
                        <p class="text-muted light-300">
                            We sample some chats from a 2-hour long stream from Twitch user "Pokimane", presented below. Scroll through to start seeing the messages and how we process them.
                            Don't scroll too fast, and <b>try not to use the scroll wheel</b> on a mouse! (scroll wheels can jump very far down the page at once and miss some of the annotations in between).
                        </p>
                    </div>
                </div><!-- End Qute -->

            </div>
            <div class="d3graphiccontainer">
                <div id='d3graphic'>
                    <div id='sections'>
                        <!-- <section class="step" id="empty-top-section"></section> -->
                        <section class="step" id="starting-step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">This is the first potentially negative message we've seen. Our automated sentiment analysis tool has judged the previous messages to be positive
                            or neutral; this message is judged as potentially negative because of the innuendo/language used. A moderator might have this message flagged as necessary to review.
                        </section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">This is an example of a message that requires special processing to understand. "Boosted" is slang with specific meaning on Twitch, implying that
                            somebody faked their way to a higher ranking. We had to compile slang terms like "boosted" and tell our sentiment analyzer to recognize such terms.
                        </section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">Common emotes on twitch such as PepeLaugh, LUL, KEKW, etc. are used to denote laughter - but laughter
                            can be sarcastic and mocking or genuine and positive. One weakness of sentiment analysis is that without further context, some messages cannot be clearly classified as
                            positive or negative. We err on the side of neutrality for this analysis.
                        </section>
                        <section class="step">.</section>
                        <section class="step">This is an example of a message that is interpreted as extremely positive. Though we have cut it off for the sake of brevity, it's the same message
                            spammed dozens of times. Such "spam" is common on Twitch, both positive and negative.  </section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">Bullying is quite common Twitch; there will inevitably be people who enter streams just to say mean things to the streamer (who is often reading
                            these messages as they play). The sentiment analysis tool attempts to find such insults, which it knows to mark as negative.
                        </section>
                        <section class="step">Another instance of "positive" spam. Here, they are using the pokiWK emote, meant to represent a WK ("white knight") cheering her on, as well as the
                            slang term "hyperclap". We have manually compiled a list of positive emotes and slang for our sentiment analyzer to use.
                        </section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">...almost at the end now...</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step" id="transition-step">At the end of this series of messages, we can see that there are approximately the same number of positive and negative messages.
                            However, the cumulative sentiment score is overwhelmingly positive. This reflects the general attitude of users in Pokimane's chat - they are likely to be very positive through
                            sharing supportive emotes, cheering her on, and even spamming messages of positivity.
                             <br><br><br><br>

                            We now move to a new streamer: Tyler1. His chat is far different from Poki's.
                        </section>
                        <section class="step">.</section>
                        <section class="step">Tyler1 is known for being more of a "toxic" streamer. He attracts a far larger male audience, cultivates a more angry persona, and enjoys
                            yelling and screaming as he plays. Let's take a look at how his chat evolves.
                        </section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">This message casts a negative light on the chat, calling them "low elo", which is slang for unskilled. Such self deprecation and insults are common
                            in his chat.
                        </section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">As you can see by now, there is more reference to sexual and immature content. Our sentiment analysis tool tries to flag this sort of content negatively, since
                            it is important to moderate these types of messages.
                        </section>
                        <section class="step">.</section>
                        <section class="step">Frequent and nonsensical spam is also common in Tyler1's chats. While not necessarily offensive, it is deliberately meant to annoy people and cause a reaction.
                            We attempt to tag such spam as negative with our sentiment analyzer.
                        </section>
                        <section class="step">.</section>
                        <section class="step">Profanity is also common. Needless to say, this is considered strongly negative.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">Many such messages have no real words, but instead use slang and serve as pure reaction. "Monka" typically refers to a series of emotes
                            that look like this, and are used to connote sadness or fear.
                        </section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">Despite not making an insulting statement, messages like this can still create a culture of negativity that persists in this streamer's chatroom.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">... almost at the end...</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">.</section>
                        <section class="step">More negative spam... </section>
                        <section class="step">.</section>
                        <section class="step">Good question, anonymous user. The answer is: you don't! (and yes, this is a real chat log from Tyler1's stream; it seems like even viewers are bewildered sometimes).
                            <br><br><br><br>As you could see from the past two chat logs, people generally don't interact or respond to each other on Twitch chats. Each chat message individually seems random and chaotic;
                            in aggregate, however, we can get a sense for the overall culture and attitude of each streamer's community.
                             </section>

                        <section class="step">See the difference? Scroll down more to see more detailed charts for each streamer. </section>
                    </div>
                    <div id='sticky-container'>
                        <div id='chat-messages'>
                        </div>
                        <div id='chat-viz'>
                        </div>
                    </div>

                    <div id="extra-space">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Start Individual Viz -->
    <section class="service-wrapper py-3">
        <div class="container-fluid pb-3">
            <div class="row">

                <h2 class="h2 text-center col-12 py-5 semi-bold-600">Let's take a closer look into each streamer's chat sentiments</h2>
                <div class="row">
                    <div class="col-md-8 m-auto text-left justify-content-center">
                        <p class="pt-5 text-muted light-300">
                            You are permitted to download, modify and use Purple Buzz template for your websites. You are <strong>not permitted</strong> to re-distribute this template ZIP file on any other template websites. It is super easy to simply copy and repost the ZIP file on any <a rel="nofollow" href="https://www.google.com/search?q=free+css" target="_blank">Free CSS</a> template websites.
                        </p>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-8 m-auto text-left justify-content-center">
                        <p class="display-6 py-4 ps-4 border border-5 border-top-0 border-end-0 border-bottom-0 border-start">
                            <i>
                                  "Vestibulum vestibulum est eu lorem laoreet suscipit. Duis auctor,
                                  metus vel sollicitudin hendrerit, elit neque pulvinar magna, non
                                  sodales orci turpis blandit quam."
                              </i>
                        </p>
                        <p class="text-muted light-300">
                            Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum nisl.
                            Donec vehicula nulla justo, vel sodales massa vestibulum nec. Praesent
                            non orci sed massa fringilla rutrum at et odio. Quisque est orci,
                            elementum sed neque ac, suscipit consectetur leo. Cras fermentum luctus
                            cursus. Ut porta, augue vel tempus congue, augue purus vulputate ex,
                            lacinia lobortis arcu metus sed lectus.
                        </p>
                    </div>
                </div><!-- End Qute -->
                <div class="feature-work container my-4"></div>

                <div class="service-header col-2 col-lg-3 text-end light-300">
                    <img class="img-fluid" src="./assets/img/twitch-icon.png" width = "50" height = "50">
                </div>
                <div class="service-heading col-10 col-lg-9 text-start float-end light-300">
                    <h2 class="h3 pb-4 typo-space-line">Visualization</h2>
                </div>
            </div>
            <p class="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
              Please select from the following tabs for each streamer's chat breakdown.
            </p>
            <div class="row justify-content-center my-0">
                <div class="filter-btns shadow-md rounded-pill text-center col-auto">
                    <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".business" href="#">Pokimane</a>
                    <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".marketing" href="#">loltyler1</a>
                    <a class="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".graphic" href="#">HealthyGamer_GG</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End Individual Viz -->

    <section class="container py-0">
        <div class="row d-flex align-items-center pb-5">
            <div class="col-lg-2 offset-lg-3 col-md-6 offset-md-2">
                <img class="rounded float-right" src="./assets/img/tyler1.jpg" width = 200>
            </div>

            <div class="col-lg-4">

                <!-- Start Profile -->
                    <div class="row p-2">

                        <div class="pricing-list-body offset-lg-2 col-md-8 align-items-center pl-3 pt-2">
                            <ul class="list-unstyled text-left light-300">
                                <li class="h5 semi-bold-600 mb-2 mt-3">Streamer</li>
                                <a rel="nofollow" href="https://www.twitch.tv/loltyler1" target="_parent">loltyler1</a>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Primary Category</li>
                                <li>League of Legends</li>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Log Date</li>
                                <li>May 6th, 2021</li>
                                <a rel="nofollow" href="https://www.twitch.tv/videos/1013510383" target="_parent">Link to stream</a>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Theme in Abstract</li>
                                <li>nice weather League play</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End Profile -->

                <div class="feature-work container my-4"></div>
                <body>
                  <iframe width="1335px" height="894px" src="https://public.tableau.com/views/twitch_16199950231110/tyler1?:showVizHome=no&:embed=true"></iframe>
                </body>

            </div>

        </div>
    </section>
    <!-- End tyler1 -->

    <section class="container py-0">
        <div class="row d-flex align-items-center pb-5">
            <div class="col-lg-2 offset-lg-3 col-md-6 offset-md-2">
                <img class="rounded float-right" src="./assets/img/drk.jpg" width = 200>
            </div>

            <div class="col-lg-4">

                <!-- Start Profile -->
                    <div class="row p-2">

                        <div class="pricing-list-body offset-lg-2 col-md-8 align-items-center pl-3 pt-2">
                            <ul class="list-unstyled text-left light-300">
                                <li class="h5 semi-bold-600 mb-2 mt-3">Streamer</li>
                                <a rel="nofollow" href="https://www.twitch.tv/healthygamer_gg" target="_parent">HealthyGamer_GG</a>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Primary Category</li>
                                <li>Just Chatting</li>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Log Date</li>
                                <li>May 3rd, 2021</li>
                                <a rel="nofollow" href="https://www.twitch.tv/videos/1009779786" target="_parent">Link to stream</a>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Theme in Abstract</li>
                                <li>Talking with Bjergsen</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End Profile -->

                <div class="feature-work container my-4"></div>
                <body>
                  <iframe width="1335px" height="894px" src="https://public.tableau.com/views/twitch_16199950231110/doublelift?:showVizHome=no&:embed=true"></iframe>
                </body>

            </div>

        </div>
    </section>
    <!-- End doublelift -->

    <section class="container py-0">
        <div class="row d-flex align-items-center pb-5">
            <div class="col-lg-2 offset-lg-3 col-md-6 offset-md-2">
                <img class="rounded float-right" src="./assets/img/pokimane.jpg" width = 200>
            </div>

            <div class="col-lg-4">

                <!-- Start Profile -->
                    <div class="row p-2">

                        <div class="pricing-list-body offset-lg-2 col-md-8 align-items-center pl-3 pt-2">
                            <ul class="list-unstyled text-left light-300">
                                <li class="h5 semi-bold-600 mb-2 mt-3">Streamer</li>
                                <a rel="nofollow" href="https://www.twitch.tv/pokimane" target="_parent">Pokimane</a>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Primary Category</li>
                                <li>Variety</li>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Log Date</li>
                                <li>April 18th, 2021</li>
                                <a rel="nofollow" href="https://www.twitch.tv/videos/992521114" target="_parent">Link to stream</a>
                                <li class="h5 semi-bold-600 mb-2 mt-3">Theme in Abstract</li>
                                <li>OfflineTV Valorant Tournament</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End Profile -->

                <div class="feature-work container my-4"></div>
                <body>
                  <iframe class="pricing-list-body offset-lg-2 col-md-10 align-items-center pl-3 pt-2" width="1335px" height="894px" src="https://public.tableau.com/views/twitch_16199950231110/Poki?:showVizHome=no&:embed=true"></iframe>
                </body>

            </div>

        </div>
    </section>
    <!-- End Poki -->

    <!-- Start Insights -->
    <section class="container py-5">
      <div class="container-fluid pb-3">
          <div class="row">
              <h2 class="h2 text-center col-12 py-5 semi-bold-600">In this visualization, you will be able to</h2>
              <div class="service-header col-2 col-lg-3 text-end light-300">
                  <img class="img-fluid" src="./assets/img/twitch-icon.png" width = "50" height = "50">
              </div>
              <div class="service-heading col-10 col-lg-9 text-start float-end light-300">
                  <h2 class="h3 pb-4 typo-space-line">Insights</h2>
              </div>
          </div>
          <p class="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
              You are free to use this template for your commercial or business websites. You are not allowed to re-distribute this template ZIP file on any template collection websites. It is too easy to illegally copy and repost this template.
          </p>
      </div>
    </section>
    <!-- End Insights -->


    <section class="service-wrapper py-3">
        <div class="pricing-list-footer col-4 text-center m-auto align-items-center">
            <a href="#" class="btn rounded-pill px-4 btn-primary light-300">Back To Top</a>
        </div>
        <div class="feature-work container my-4"></div>
    </section>
    <!-- End Top -->




    <!-- Start Footer -->
    <footer class="bg-secondary pt-4">
        <div class="container">
          <section class="bg-secondary">
              <div class="container py-5">
                  <div class="row d-flex justify-content-center text-center">
                      <div class="col-lg-7 col-12 text-light pt-2">
                          <p class="banner-body py-3 mx-0 px-0">This website was created by Alex(Keming) Gao & Claire(Yuan) Zhu as a project for [Info247 - Information Visualization and Presentation] class at the School of Information at the University of California, Berkeley.</p>
                          <p class="banner-body py-3 mx-0 px-0">
                              This website is built using HTML and Bootstrap 5, with elements provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a>.
                          </p>
                        </div>
                  </div>
              </div>
          </section>
            </div>

    </footer>
    <!-- End Footer -->


    <!-- Bootstrap -->
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <!-- Load jQuery require for isotope -->
    <script src="assets/js/jquery.min.js"></script>
    <!-- Isotope -->
    <script src="assets/js/isotope.pkgd.js"></script>
    <!-- Page Script -->
    <script>
        $(window).load(function() {
            // init Isotope
            var $projects = $('.projects').isotope({
                itemSelector: '.project',
                layoutMode: 'fitRows'
            });
            $(".filter-btn").click(function() {
                var data_filter = $(this).attr("data-filter");
                $projects.isotope({
                    filter: data_filter
                });
                $(".filter-btn").removeClass("active");
                $(".filter-btn").removeClass("shadow");
                $(this).addClass("active");
                $(this).addClass("shadow");
                return false;
            });
        });
    </script>
    <!-- Templatemo -->
    <script src="assets/js/templatemo.js"></script>
    <!-- Custom -->
    <script src="assets/js/custom.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="https://d3js.org/d3.v6.min.js"></script>
    <script src="assets/js/scroller.js"></script>
    <script src="assets/js/sections.js"></script>

</body>

</html>
