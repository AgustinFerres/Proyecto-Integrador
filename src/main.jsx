import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars, faXmark, faLocationDot, faHeart, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faBars, faXmark, faLocationDot, faEyeSlash, faEye, faHeart, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faCalendarDay);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
