import { Heart } from 'lucide-react'; //, Gift
import { useNavigate } from 'react-router-dom';
import { HREF_LINK_DONATE } from '../globals';

// const GetInvolved = () => {
//   const navigate = useNavigate();
  
//   const handleDonateClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     window.scrollTo(0, 0);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setTimeout(() => {
//       navigate(HREF_LINK_DONATE);
//       window.scrollTo(0, 0);
//     }, 50);
//   };



//   return (
//     <section id="get-involved" className="relative bg-background py-16 overflow-visible">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-4">
//             Make a Difference Today
//           </h2>
//           <p className="text-lg text-content-secondary max-w-2xl mx-auto">
//             Your support helps us provide hope and opportunities for children in need.
//           </p>
//         </div>

//         <div className="max-w-md mx-auto">
//           <div className="bg-background-dark rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
//             <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
//               <Gift className="w-10 h-10 text-primary" />
//             </div>
//             <h3 className="text-2xl font-bold text-center mb-4">Support Our Mission</h3>
//             <p className="text-content-secondary text-center mb-6">
//               Your financial support helps us provide food, education, and care for children in need.
//               Every donation makes a difference in their lives.
//             </p>
//             <button
//               onClick={handleDonateClick}
//               className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-dark text-lg font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
//             >
//               <Heart className="w-5 h-5" />
//               Donate Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const DonateCTA = () => {
  const navigate = useNavigate();
  
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(HREF_LINK_DONATE);
      window.scrollTo(0, 0);
    }, 50);
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-background-dark rounded-2xl overflow-hidden border border-border shadow-lg p-8 w-full max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-content-white mb-2">
              Support Our Children
            </h2>
            <p className="text-content-offtone mb-8">
              Your donation helps provide food, education, and care for children in need.
            </p>
            <button
              onClick={handleDonateClick}
              className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-dark text-lg font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;