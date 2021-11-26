import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function Team(props) {

    return (
        <section>
            <Container maxWidth="lg">
                <Box pt={8} pb={10} >
                    <Box mb={9}>
                        <Container maxWidth="sm">
                           <div className="headerContent">
                                <h1>MEET THE PANEL</h1>
                                <p>

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor
                                </p>
                                
                           </div>
                        </Container>
                    </Box>

                    <Grid container spacing={1} >
                        <Box sx={{ flexGrow: 1 }} className="rootClassforTeam">

                            <Grid container spacing={1}>
                                <Grid container item spacing={1}>
                                    <React.Fragment>

                                        <Grid item xs={4}>
                                          
                                        </Grid>

                                        <Grid item xs={4}>

                                            <div className="mcontainer">


                                                <div className={"UserImage"} >
                                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=256&ah=256&q=80" alt="" className={'avatarImage top-first marginOnMobile'} />
                                                </div>


                                                <div className="bordInfo">
                                                    <h3> John Doe</h3>
                                                    <p> UI/ UX Engineer at Compnay</p>
                                                </div>

                                            </div>



                                        </Grid>

                                        <Grid item xs={4}>
                                        
                                        </Grid>

                                  

                                    </React.Fragment>
                                </Grid>

                                <Grid container item spacing={1}>
                                    <React.Fragment>

                                        <Grid item xs={4}>
                                            <div className={"mcontainer secondCard"}>

                                                <div className="bordInfoleft">
                                                    <h3> John Doe 2</h3>
                                                    <p> UI/ UX Engineer at Compnay</p>
                                                </div>
                                                <div className="UserImage">
                                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=256&ah=256&q=80" alt="" className={'avatarImage center-left marginOnMobile'} />
                                                </div>


                                            </div>

                                        </Grid>

                                        <Grid item xs={4} className="thirdCard">

                                            <div className={"mcontainer thirdCard"}>

                                                <div className="UserImage">
                                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=256&ah=256&q=80" alt="" className={'avatarImage center-img marginOnMobile'} />
                                                </div>


                                                <div className="bordInfo">
                                                    <h3> John Doe 3</h3>
                                                    <p> UI/ UX Engineer at Compnay</p>
                                                </div>

                                            </div>


                                        </Grid>

                                        <Grid item xs={4}>

                                        </Grid>



                                    </React.Fragment>
                                </Grid>

                                <Grid container item spacing={1}>
                                    <React.Fragment>

                                        <Grid item xs={4}>


                                            <div className="mcontainer">

                                                <div className="UserImage hide">
                                                  
                                                </div>


                                                <div className="bordInfo">
                                                    <h3> John Doe 4</h3>
                                                    <p> UI/ UX Engineer at Compnay</p>
                                                    
                                                </div>

                                            </div>


                                
                                            
                                        </Grid>


                                        <Grid item xs={4}>
                                            

                                            <div className="mcontainerLast">



                                                <div className="UserImage">
                                                    <img src="https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80" alt="" className='avatarImage bottom-center marginOnMobile' />
                                                </div>



                                                <div className="mcontainer lastrow-right">

                                                    <div className={"UserImage lastRowFix"}>
                                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=256&ah=256&q=80" alt="" className={'avatarImage bottom-right'} />
                                                    </div>



                                                </div>
                             

                                            </div>


                                        </Grid>

                                        <Grid item xs={4}>

                                            <div className="lastboardInfo">
                                                <h3> John Doe 5</h3>
                                                <p> UI/ UX Engineer at Compnay</p>
                                          
                                            </div>

                                        
                                        </Grid>



                                    </React.Fragment>
                                </Grid>

                               
                           
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </section>
    );

}
