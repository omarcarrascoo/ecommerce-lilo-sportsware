import React from 'react'

export default function MainFooter() {
  return (
    <footer className="footer-contact">
            <div className="footer-inner">
                <p><a href="mailto:hello@liloactivewear.com">hello@liloactivewear.com</a></p>
                <p><a href="/terms">Terms & Conditions</a></p> 
                <p>© {new Date().getFullYear()} Lilo.</p>
            </div>
     </footer>
  )
}
