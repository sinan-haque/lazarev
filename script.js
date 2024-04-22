function navAnimation(){
//     var nav=document.querySelector('nav')

// nav.addEventListener('mouseenter',function(){
//     const tl=gsap.timeline()

//     tl.to('#nav-bottom',{
//     height:'21vh'
//     })

//     tl.to('.sub-nav h5',{
//         display:'block'
//     })

//     tl.to('.sub-nav h5 span',{
//         y:20,
//         stagger:{
//             amount:0.6
//         }
        
//     })

// })

const nav=document.querySelector('nav')
nav.addEventListener('mouseenter',function(){
    const tl=gsap.timeline()
    tl.to('#nav-bottom',{
        height:'21vh'
    })
    tl.to('.sub-nav h5',{
        display:'block',
        duration:0.1
    })
    tl.to('.sub-nav h5 span',{
        y:20,
        stagger:{
            amount:0.0001
        }
    })
})



nav.addEventListener('mouseleave',function(){
    const tl=gsap.timeline()

    tl.to('.sub-nav h5 span',{
           y:25,
           stagger:{
            amount:0.2
           }
    })

    tl.to('.sub-nav h5',{
        display:'none',
        duration:0.1
    })

    tl.to('#nav-bottom',{
        height:0,
        duration:0.2
        
    })

})
}
navAnimation();