import '@/styles/globals.css'
import Layout from "../components/Layout";
import WheelSegmentsContext from "../context/wheelState"
function MyApp({ Component, pageProps }) {
  return (
<WheelSegmentsContext>
<Layout>
        <Component {...pageProps} />
      </Layout>
</WheelSegmentsContext>
 
   
  );
}

export default MyApp;