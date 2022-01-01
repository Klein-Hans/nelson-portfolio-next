import { useState, useRef, useCallback } from 'react';
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
        console.log(index % 2 == 0);
        return (
          <ServiceList
            service={item}
            even={index % 2 == 0 ? true : false}
            key={index}
          />
        );
      })}
    </>
  );
}
