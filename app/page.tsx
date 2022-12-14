"use client"

import { useState } from 'react'
import { motion } from "framer-motion";
import { JobIntro } from "../components/jobIntro"
import PastProject from "../components/pastProject"
import Expertise from "../components/expertise";

const HomePage = () => {
  return (
    <>
      <JobIntro />
      <div className='flex flex-col gap-64'>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PastProject />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Expertise />
        </motion.div>
      </div>
    </>
  )
}

export default HomePage