import React from 'react'
import Header from '../website/header'
import Footer from '../website/footer'

const WebsiteLayout = (props) => {
    return (
        <>
            <Header>  website</Header>
            <main >    
                {props.children} 
            </main>
            <Footer> footer </Footer>
        </>
    )
}
// trong useEffect() 
// window.scroll(0,0)
// window.scroll({
//   top: 100,
//   left: 100,
//   behavior: 'smooth'
// });
export default WebsiteLayout
