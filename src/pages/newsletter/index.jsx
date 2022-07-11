import { Container } from '@mui/material';

const NewsLetterPage = () => {

    return (
        <>
            <Container>
                <div id="mc_embed_signup">
                    <form action="https://kamaste.us18.list-manage.com/subscribe/post?u=24d439b6b24f82e0038e7453e&amp;id=08806e6331" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <div className="component-title">
                                <h3>Inscription à la Newsletter</h3>
                            </div>
                            <div className="indicates-required"><span className="asterisk">*</span> champs requis</div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">Email <span className="asterisk">*</span>
                                </label>
                                <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-FNAME">Prénom </label>
                                <input type="text" defaultValue="" name="FNAME" className="" id="mce-FNAME" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-LNAME">Nom </label>
                                <input type="text" defaultValue="" name="LNAME" className="" id="mce-LNAME" />
                            </div>
                            <div className="mc-field-group size1of2">
                                <label htmlFor="mce-PHONE">Téléphone </label>
                                <input type="text" name="PHONE" className="" defaultValue="" id="mce-PHONE" />
                            </div>
                            <div className="mc-field-group size1of2">
                                <label htmlFor="mce-BIRTHDAY-month">Date de naissance </label>
                                <div className="datefield">
                                    <span className="subfield dayfield"><input className="birthday " type="text" pattern="[0-9]*" defaultValue="" placeholder="DD" size="2" maxLength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" /></span>
                                    <span className="subfield monthfield"><input className="birthday " type="text" pattern="[0-9]*" defaultValue="" placeholder="MM" size="2" maxLength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" /></span> /
                                    <span className="small-meta nowrap">( dd / mm )</span>
                                </div>
                            </div> <div id="mce-responses" className="clear foot">
                                <div className="response d-none" id="mce-error-response"></div>
                                <div className="response d-none" id="mce-success-response"></div>
                            </div>
                            <div style={{ visibility: 'hidden' }} aria-hidden="true"><input type="text" name="b_24d439b6b24f82e0038e7453e_08806e6331" tabIndex="-1" defaultValue="" /></div>
                            <div className="optionalParent">
                                <div className="clear foot">
                                </div>
                                <div id='send-btn'>
                                    <input type="submit" id="mc-embedded-subscribe" className='border-effect-blue' defaultValue="S'abonner" name="subscribe" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>

        </>
    );
};

export default NewsLetterPage;