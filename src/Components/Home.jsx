import React from 'react'
import "./Home.css"



export default function Home() {


  return (
    <>


      <div className='home_container1'>

        <div style={{ display: 'flex' }}>

          <div className="card" style={{ width: '30%', paddingTop: '0.4px', paddingBottom: '0.4' }}>
            <img src="images\topfeed2_4.jpg" alt="..." />
          </div>

          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ width: '70%' }} >
            <div className="carousel-inner" style={{ height: 'auto' }}>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src="images\w_cup_slide1.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 style={{ fontWeight: 'bolder' }}>FIFA Women's World Cup™</h5>

                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src="images\mancity_slide2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 style={{ fontWeight: 'bolder', textAlign: 'right' }}>Manchester City won the Champions League for the first time</h5>

                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src="images\drice_slide3.jpg.webp" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 style={{ fontWeight: 'bolder', textAlign: 'right' }}>Declan Rice has finally completed a transfer to Arsenal</h5>

                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>




        <div className='home_heading1'>Recent News</div>
        <hr style={{ color: '#57606f' }}></hr>


        <div className='news_card'>
          <div className="card mb-3" style={{ maxWidth: 'auto' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="images/messi_story2.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: '20px' }}>Lionel Messi becomes top scorer for Inter Miami in 2023 after just four matches</h5>
                  <p className="card-text" style={{ fontSize: '16px' }}>In just four appearances for his new club Inter Miami, World Cup winner and Argentine legend Lionel Messi has become the side's top scorer in the ongoing 2023 season.
                    Messi's double strike in his first away match for Inter Miami on Sunday took his tally to seven goals in four Leagues Cup matches for the Major League Soccer club that is owned by former England captain David Beckham.
                    This was after FC Dallas owner Dan Hunt had effusive praise for Messi just hours before their Leagues Cup cup match against Inter Miami.
                    According to Hunt, he was desperate to watch Messi play because because to him, watching the Argentine star was akin to watching Michael Jordan.
                  </p>
                  <p className="card-text"><small className="text-body-secondary">AUGUST 06, 2023 22:16, Last updated 3 mins ago</small></p>
                  <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='news_card'>
          <div className="card mb-3" style={{ maxWidth: 'auto' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="images\ronaldo_story.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: '20px' }}>Raja Casablanca 1-3 Al Nassr Highlights: Cristiano Ronaldo scores as Al Nassr enters Arab Club Champions Cup semifinals</h5>
                  <p className="card-text" style={{ fontSize: '16px' }}>Cristiano Ronaldo opened the scoring as Al Nassr beat Raja Casablanca 3-1 to enter the semifinals of the Arab Club Champions Cup.
                    83’ Ronaldo’s shot hits the woodwork!
                    Sultan wins the ball in the Al Nassr half and marches up the pitch. He beats two defenders as he barges into the box and passes to Ghareeb who then gets it to Ronaldo. Ronaldo stops, switches his attack and then shoot but the ball hits the woodwork.
                  </p>
                  <p className="card-text"><small className="text-body-secondary">AUGUST 06, 2023 20:16, Last updated 3 mins ago</small></p>
                  <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='news_card'>
          <div className="card mb-3" style={{ maxWidth: 'auto' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="images\neymar_story.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: '20px' }}>'Neymar is priceless for PSG!' - Kylian Mbappe and Lionel Messi wouldn't have joined French giants if not for Brazil hero, says agent</h5>
                  <p className="card-text" style={{ fontSize: '16px' }}>According to Andre Cury, Neymar's transfer was the best thing that could have happened to PSG as, after his transfer to the club in 2017, big names such as Lionel Messi, Kylian Mbappe and Angel Di Maria made the switch to the French capital. Cury further claimed that the transfers of Mbappe and Neymar to PSG were the only successful moves that involved fees in excess of €100 million.
                  </p>
                  <p className="card-text"><small className="text-body-secondary">AUGUST 05, 2023 14:16, Last updated 3 mins ago</small></p>
                  <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='news_card'>
          <div className="card mb-3" style={{ maxWidth: 'auto' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="images\women_worldcup.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: '20px' }}>Here's How To Watch FIFA Women's World Cup Online Free – Where To Stream Women's World Cup 2023 (Live) On Fox From Anywhere</h5>
                  <p className="card-text" style={{ fontSize: '16px' }}>Soccer Streams! Here’s options for listening or watching Women's World Cup 2023 live streaming for free on Reddit, Crackstreams, including where to watch the Women's World Cup all matches online. Soccer's biggest Event in a years-long rivalry is happening In Australia and New Zealand. The Women's World Cup is going to be one of the biggest events of 2023, but as a PPV, it’s airing on Fox, so now’s the time to sign up.
                  </p>
                  <p className="card-text"><small className="text-body-secondary">AUGUST 05, 2023 14:16, Last updated 3 mins ago</small></p>
                  <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='section_2news'>
          <div className="card" style={{ width: "18rem", marginBottom: '10px' }}>
            <img src="images\mbappe_story.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: '16px', fontWeight: 'bold' }}>Real Madrid handed major Kylian Mbappe transfer boost</p>
              <p className="card-text"><small className="text-body-secondary">AUGUST 05, 2023 14:16, Last updated 3 mins ago</small></p>
              <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginBottom: '10px' }}>
            <img src="images\haaland_story.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: '16px', fontWeight: 'bold' }}>Haaland takes place as the best striker in Mancity</p>
              <p className="card-text"><small className="text-body-secondary">AUGUST 05, 2023 14:16, Last updated 3 mins ago</small></p>
              <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginBottom: '10px' }}>
            <img src="images\womenteam_story.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: '16px', fontWeight: 'bold' }}>England women's team edge Nigeria with penalties after James's strike</p>
              <p className="card-text"><small className="text-body-secondary">AUGUST 05, 2023 14:16, Last updated 3 mins ago</small></p>
              <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginBottom: '10px' }}>
            <img src="images\kane_story.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: '16px', fontWeight: 'bold' }}>Bayern Munich chiefs to discuss Tottenham striker as they wait for an answer on 'final offer'</p>
              <p className="card-text"><small className="text-body-secondary">AUGUST 05, 2023 14:16, Last updated 3 mins ago</small></p>
              <p className="card-text"><small className="text-body-secondary">short by Bhuvnesh ojha</small></p>
            </div>
          </div>
        </div>






        <div className='home_heading2'>Popular Competitions</div>
        <hr style={{ color: '#57606f' }}></hr>

       
          
           

              <div className='competition_menu' >


                <div className="card" style={{ width: "18rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\bundesliga-logo.png"  alt="..." height={60} style={{margin: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Bundesliga</h5>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\laliga-logo.png" alt="..."  height={60} style={{margin: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Laliga</h5>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\ligue-1-logo.png"  alt="..."  height={60} style={{margin: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Ligue-1</h5>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\premier-league-logo_1.png" alt="..."  height={60} style={{margin: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Premier League</h5>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\serie-a-logo.png" alt="..."  height={60} style={{margin: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Seria A</h5>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\ucl-logo-dark.png" alt="..."  height={60} style={{margin: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Champions League</h5>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\uel-logo-dark.png" alt="..."  height={60} style={{margin: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Europa League</h5>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                      <img src="images\teamsimg\liga-bbva-mx_1.jpg"  alt="..."  height={60} style={{margin: '4px', marginLeft: '4px'}}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Liga BBVA</h5>

                      </div>
                    </div>
                  </div>
                </div>


              </div>
            

          



        <div className='home_heading2'>Match Highlights</div>
        <div className='home_subheading2'>Relive the best moments</div>
        <hr style={{ color: '#57606f' }}></hr>




        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">

              <div className='highlight_menu'>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <iframe width="250" height="130" src="https://www.youtube.com/embed/HwuXlfvkg5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="card-text">Kuwait 1 [4] - 1 [5] India | Full Highlights | FINAL | SAFF Championship 2023</p>

                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <iframe width="250" height="130" src="https://www.youtube.com/embed/l-L6ry8oST8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="card-text">HIGHLIGHTS | Arsenal vs Manchester City (1-1, 4-1 on pens) </p>

                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <iframe width="250" height="130" src="https://www.youtube.com/embed/zuz3mpC7tLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="card-text">HIGHLIGHTS: Inter Miami CF vs. Orlando City | August 2, 2023</p>

                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <iframe width="250" height="130" src="https://www.youtube.com/embed/w1JOKtxcZ7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="card-text">HIGHLIGHTS: Columbus Crew vs. Minnesota United | August 4, 2023</p>

                  </div>
                </div>


              </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <div className='highlight_menu'>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <iframe width="250" height="130" src="https://www.youtube.com/embed/DbG1GE-n2Rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="card-text">MATCH HIGHLIGHTS | Aston Villa 3-0 Lazio</p>

                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <iframe width="250" height="130" src="https://www.youtube.com/embed/DacGeP0Ooik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="card-text">Chelsea 2 - 0 Fulham | Match Highlights | Premier League Summer Series</p>

                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">

                    <iframe width="250" height="130" src="https://www.youtube.com/embed/V2wasL3olNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <p className="card-text">LIONEL MESSI FIRST GOALS for INTER MIAMI CF vs. PHILADELPHIA</p>

                  </div>
                </div>

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <iframe width="250" height="130" src="https://www.youtube.com/embed/EGRx8felItI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="card-text">HIGHLIGHTS: New York Red Bulls vs. New York City FC | August 3, 2023</p>

                  </div>
                </div>
              </div>
            </div>

          </div>


          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>





      </div>




    </>
  )
}
