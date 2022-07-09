import Footer from "./components/Footer";
import PreviewCard from "./components/PreviewCard";
import luxury from "./images/icon-luxury.svg"
import sedans from "./images/icon-sedans.svg"
import suvs from "./images/icon-suvs.svg"

function App() {
  return (
    <div className="App max-w-screen min-h-screen bg-fem-500 selection:bg-neutral-900 selection:text-fem-500 font-lexend-deca">
        <main className="flex items-center justify-center min-h-[calc(100vh-1.5rem)] w-full">
            <section className="text-fem-400 m-8 flex flex-col lg:flex-row drop-shadow-lg">
                <PreviewCard title="Sedans" image={sedans} bgColor="bg-fem-100" textColor="text-fem-100" cn="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.  
                </PreviewCard>

                <PreviewCard title="SUVs" image={suvs} bgColor="bg-fem-200" textColor="text-fem-200" >
                    Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.  
                </PreviewCard>

                <PreviewCard title="Luxury" image={luxury} bgColor="bg-fem-300" textColor="text-fem-300" cn="rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.  
                </PreviewCard>
            </section>
        </main>
  
        <Footer />
    </div>
  )
}

export default App;
