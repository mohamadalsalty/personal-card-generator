import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { iForm } from './types/iForm'




const Form = ({ name, photo, details, facebook, twitter, backgroundColor, width, mainTextColor, widthOfTheImage, mainLinkColor }: iForm) => {
    return (

        <div className='card' style={{ 'backgroundColor': backgroundColor, width: `${width}px` }}>

            {
                photo && (
                    <div className="photo">
                        <img src={photo} alt="" style={{ width: `${widthOfTheImage}px` }} />

                        {
                            (facebook || twitter) && (
                                <div className="social-media-icons" style={{ width: `${widthOfTheImage}px` }}>
                                    {
                                        facebook && (
                                            <div className="facebook">
                                                <a>
                                                    <FontAwesomeIcon icon={brands('facebook')} color={mainLinkColor} />
                                                    <span style={{ color: mainLinkColor }}>{facebook}</span>
                                                </a>
                                            </div>
                                        )


                                    }

                                    {
                                        twitter && (
                                            <div className="twitter">
                                                <a>
                                                    <FontAwesomeIcon icon={brands('twitter')} color={mainLinkColor} />
                                                    <span style={{ color: mainLinkColor }}>{twitter}</span>

                                                </a>
                                            </div>
                                        )


                                    }



                                </div>

                            )
                        }

                    </div>
                )
            }

            <div className='info'>

                {
                    name && (
                        <div className={`
                    name
                    ${photo && 'with-image'}
                    `}

                            style={{ paddingLeft: `${photo ? `${widthOfTheImage}px` : '0'}` }}

                        >
                            <span style={{ color: `${mainTextColor}` }}>
                                {name}
                            </span>
                        </div>
                    )
                }

                {
                    details && (
                        <div className={`
                        details
                        ${photo && 'with-image'}
                        `}
                            style={{ paddingLeft: `${photo ? `${widthOfTheImage}px` : '0'}` }}
                        >
                            <span style={{ color: mainTextColor }}>{details}</span>
                        </div>
                    )
                }
            </div>

        </div>)
}

export default Form