import React from 'react'
import './CustomFooterStyle.css'
import * as Strings from '../../resources/strings/Strings'
import * as AppConstants from '../../utils/AppConstants'
import linkedIn from '../../resources/images/linkedin.png'
import twitter from '../../resources/images/twitter.png'
import google from '../../resources/images/googleplus.png'
import whatsapp from '../../resources/images/whatsapp.png'
import Social from '../socialconnect/Social'
import facebook from '../../resources/images/facebook.png'
import SubscriberNewsLetter from '../subsnewsletter/SubscriberNewsLetter'


class CustomFooter extends React.Component {
    render() {
        return (
            <div >
                <div className='FooterMainContent'>
                    <div className='AboutUsStyle'>
                        <h5 >{Strings.about_us}</h5>
                        <h5 className='AboutUsContentStyle'>{Strings.loren_ipsum}<br />{Strings.loren_ipsum}<br /><br />
                            {Strings.loren_ipsum}<br />{Strings.loren_ipsum}<br />
                        </h5>
                    </div>

                    <div className='ContactUsStyle'>
                        <h5>{Strings.company}</h5>
                        <h5 className='LinksStyle'>{Strings.careers}</h5>
                        <h5 className='LinksStyle'>{Strings.investors}</h5>
                        <h5 className='LinksStyle'>{Strings.funding}</h5>
                        <h5 className='LinksStyle'>{Strings.privacy_policy}</h5>
                        <h5 className='LinksStyle'>{Strings.terms_and_conditions}</h5>
                    </div>

                    <div className='NewsLetterParentLayout'>
                        <h5>{Strings.subs_to_newsletter}</h5>
                        <SubscriberNewsLetter />
                    </div>
                </div>
                <hr />

                <div className='SocialConnectionMainContent'>
                    <Social
                        hrefLink={AppConstants.FACE_BOOK}
                        imageSource={facebook}
                        alternateName="facebook" />

                    <Social
                        hrefLink={AppConstants.WHATS_APP}
                        imageSource={whatsapp}
                        alternateName="whatsapp" />

                    <Social
                        hrefLink={AppConstants.LINKED_IN}
                        imageSource={linkedIn}
                        alternateName="linkedIn" />

                    <Social
                        hrefLink={AppConstants.GOOGLE_PLUS}
                        imageSource={google}
                        alternateName="google" />

                    <Social
                        hrefLink={AppConstants.TWITTER}
                        imageSource={twitter}
                        alternateName="twitter" />
                </div>

                <div className='RightsReservedContent'>
                    <h5 className='RightsReserved'>{Strings.all_rights_reserved}</h5>
                </div>
            </div>
        )
    }
}

export default CustomFooter