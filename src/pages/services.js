import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceList } from 'components/organisms';
import Image from 'next/image';

export default function Services() {
  const imagesRoot = '/static/images';
  const research = `${imagesRoot}/undraw_programming_re_kg9v.svg`;
  const world = `${imagesRoot}/undraw_connected_world_wuay.svg`;
  const inventoryMgmt = `${imagesRoot}/undraw_data_processing_yrrv.svg`;
  const branding = `${imagesRoot}/undraw_pitching_re_fpgk.svg`;
  const product = `${imagesRoot}/undraw_product_iteration_kjok.svg`;
  const realtime = `${imagesRoot}/undraw_real_time_sync_re_nky7.svg`;
  // const services = `${imagesRoot}/undraw_dev_productivity_umsq.svg`;
  const desk = `${imagesRoot}/desk.jpeg`;

  const controls = useAnimation();
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
  };

  const [services, setServices] = useState([
    {
      name: 'KEYWORD & PRODUCT RESEARCH',
      description:
        'Analyzing current market trends to choose “winning” items – something that can generate high sales.content-center',
      image: research,
    },
    {
      name: 'CUSTOMER SERVICE',
      description: `Bad customer service is a key driver of churn. The U.S. Small Business Administration reports that 68% of customers leave because they’re upset with the treatment they've received. Don’t let that happen to you.`,
      image: world,
    },
    {
      name: 'BRANDING',
      description:
        'Let your customers recognise and experience your business. A strong brand is more than just a logo.',
      image: branding,
    },
  ]);

  const ref = useRef();
  const [inViewRef, inView] = useInView();

  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible');
  //   }
  //   if (!inView) {
  //     controls.start('hidden');
  //   }
  // }, [controls, inView]);

  useEffect(() => {
    // services.map((item, index) => {
    //   item.leftVariants = {
    //     hidden: { x: -100, opacity: 0 },
    //     visible: {
    //       x: 0,
    //       opacity: 1,
    //       transition: {
    //         ease: 'easeOut',
    //         duration: 1 * index,
    //       },
    //     },
    //   };
    //   item.rightVariants = {
    //     hidden: { x: 100, opacity: 0 },
    //     visible: {
    //       x: 0,
    //       opacity: 1,
    //       transition: {
    //         ease: 'easeOut',
    //         duration: 1 * index,
    //       },
    //     },
    //   };
    //   return item;
    // });
  }, []);

  return (
    <>
      <div className='grid grid-rows-2 grid-flow-col h-screen'>
        <motion.div
          className='grid content-center h-screen '
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <h3 className='font-bebas-neue relative text-9xl text-center font-sans font-bold tracking-tighter text-gray-800 dark:text-white text-shadow-2xl'>
            SERVICES
          </h3>
        </motion.div>
      </div>

      {services.map((item, index) => {
        item.duration = 1 * (1 + index);
        return (
          <ServiceList service={item} even={index % 2 == 0 ? true : false} />
        );
      })}
      {/* <div className='flex justify-center text-gray-800 dark:text-white'>
        <motion.div
          ref={ref}
          className='grid content-center w-80'
          initial='hidden'
          animate={controls}
          variants={leftVariants}
        >
          <h4 className='text-md font-bold uppercase'>
            Keyword & Product Research
          </h4>
          <p>
            {' '}
            Analyzing current market trends to choose “winning” items –
            something that can generate high sales.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          className=' justify-center'
          initial='hidden'
          animate={controls}
          variants={rightVariants}
        >
          <Image
            src={research}
            width='300'
            height='300'
            className='max-w-xs md:max-w-xs rounded-lg shadow-2xl'
          />
        </motion.div>
      </div> */}
    </>
  );
}
