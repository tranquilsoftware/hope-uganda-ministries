import { ScrollAnimation } from './animations/ScrollAnimation'
import { AnimatedBulletPoints } from './animations/AnimatedBulletPoints'
import { BRAND_NAME, IMG_1} from '../globals'
// import { BubbleTransition } from './transitions/BubbleTransition';
 
const LanderAbout = () => {
  const about = [
    "A non-profit ministry of hope",
    "Feeding the hungry and thirsty orphans with food and spiritual food",
    "Based in Masaka, Uganda"
  ]


  return (
    
    <>
      {/* <BubbleTransition 
        className="absolute z-10"
        height={50}
      /> */}

    <section id="about" className="relative bg-background overflow-visible">

        

        <div className="pt-10 pb-20">
          <div className="container mx-auto px-4">
          {/* First Row: Image Left, Text Right */}
          <ScrollAnimation delay={0.2} direction="right">
          <div className="flex flex-col md:flex-row items-center mb-20">
            
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 w-full h-full">
              <div className="relative group w-full h-full">

                  
                <div className="relative overflow-hidden z-10 max-h-[400px] object-center w-full rounded-2xl">
                {/* <div className="relative overflow-hidden z-10 w-full h-full min-h-[300px] rounded-full"> */}

                  <img 
                    src={IMG_1}
                    alt={`${BRAND_NAME}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            
            {/* Text Section */}
            <div className="md:pl-12 relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-content-primary">
                About {BRAND_NAME}
              </h2>
              <AnimatedBulletPoints 
                items={about}
                delay={0.3}
                direction="right"
                textClassName="text-content-secondary text-lg"
              />
            </div>
          </div>
          </ScrollAnimation>

          {/* Second Row: Text Left, Image Right */}
          {/* <ScrollAnimation delay={0.2} direction="left">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section - Now on left for mobile, stays left on desktop *-/}
            <div className="md:w-1/2 md:pr-12 relative z-10 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-content-primary">
                More About {BRAND_NAME}
              </h2>
              <AnimatedBulletPoints 
                items={moreAbout}
                delay={0.3}
                direction="left"
                textClassName="text-content-secondary text-lg"
              />
            </div> 
            
            {/* Image Section - Now on right for mobile, stays right on desktop *-/}
            <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2 w-full h-full">
              <div className="relative group w-full h-full">
                <div className="relative overflow-hidden z-10 w-full h-full min-h-[300px] rounded-full">
                  <img 
                    src={BAR_2}
                    alt={`${BRAND_NAME} Quality`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimation> */}
        </div>
      </div>
    </section>
    </>
  )
}

export default LanderAbout
