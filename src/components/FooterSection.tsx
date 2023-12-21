import React from 'react'
import LeftFooterPortion from './LeftFooterPortion'
import RightFooterPortion from './RightFooterPortion'

function FooterSection() {
    return (
        <footer id="footer-section" className="w-full">
            <div className="container flex flex-col md:flex-row w-[87%] mx-auto">
                <LeftFooterPortion />
                <RightFooterPortion />
            </div>

        </footer>
    )

    // =======
    // return (
    //     <div id='footer-section' className='text-white'>FooterSection</div>
    // )
}

export default FooterSection