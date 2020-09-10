import React from 'react'
import './CustomFooterStyle.css'
import * as Strings from '../../resources/strings/Strings'
import * as AppConstants from '../../utils/AppConstants'
import linkedIn from '../../resources/images/linkedin.png'
import facebook from '../../resources/images/facebook.png'
import twitter from '../../resources/images/twitter.png'
import google from '../../resources/images/googleplus.png'
import whatsapp from '../../resources/images/whatsapp.png'

function CustomFooter() {
    return (
        <div >
            <div className='FooterMainContent'>
                <div className='AboutUsStyle'>
                    <h3>{Strings.about_us}</h3>
                    <h5>{Strings.loren_ipsum}<br />{Strings.loren_ipsum}<br /><br />
                        {Strings.loren_ipsum}<br />{Strings.loren_ipsum}<br />
                    </h5>
                </div>

                <div className='ContactUsStyle'>
                    <h3>{Strings.company}</h3>
                    <h5 className='LinksStyle'>{Strings.about_us}</h5>
                    <h5 className='LinksStyle'>{Strings.careers}</h5>
                    <h5 className='LinksStyle'>{Strings.investors}</h5>
                    <h5 className='LinksStyle'>{Strings.funding}</h5>
                </div>
            </div>
            <hr />

            <div className='SocialConnectionMainContent'>
                <a href={AppConstants.FACE_BOOK} target="_blank">
                    <img src={facebook} alt="facebook" className='SocialConnectionContent'></img>
                </a>

                <a href={AppConstants.WHATS_APP} target="_blank">
                    <img src={whatsapp} alt="whatsapp" className='SocialConnectionContent'></img>
                </a>

                <a href={AppConstants.LINKED_IN} target="_blank">
                    <img src={linkedIn} alt="linkedIn" className='SocialConnectionContent'></img>
                </a>

                <a href={AppConstants.GOOGLE_PLUS} target="_blank">
                    <img src={google} alt="google" className='SocialConnectionContent'></img>
                </a>

                <a href={AppConstants.TWITTER} target="_blank">
                    <img src={twitter} alt="twitter" className='SocialConnectionContent'></img>
                </a>

            </div>

            <div className='RightsReservedContent'>
                <h5 className='RightsReserved'>{Strings.all_rights_reserved}</h5>
            </div>

        </div>
    )
}

export default CustomFooter