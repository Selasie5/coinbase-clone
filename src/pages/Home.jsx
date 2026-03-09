import image from "../assets/hero.png"
import Advanced from "../assets/advanced.png"
import ZeroFees from "../assets/zero_fees_us.png"
import BaseApp from "../assets/base_app.png"
import Image from "../assets/image.png"
import Button from "../components/common/Button"
import Tag from "../components/common/Tag"
import MarketMoversCard from "../components/crypto/MarketMoversCard"
import { homeArticlesSection } from "../data/home"
import { useLocale } from "../context/LocaleContext"

const Home = () => {
  const { t } = useLocale()
  return (
  <div className="w-full space-y-10 relative">
   <div className='pb-10 '>
    



    <section className='flex w-full justify-between gap-14 items-center min-h-screen bg-white px-10'>
      <div className="w-1/2 flex flex-col justify-center items-start gap-2">
<img src={image} alt='' className='rounded-[4rem]'/>
<p className="font-coinbase-display font-normal text-sm text-gray-500">
  Stocks and prediction markets not available in your jurisdiction.
</p>
      </div>
      
      <div className="w-1/2 flex flex-col justify-center items-start gap-5">
      <h1 className="text-[80px] font-coinbase-sans font-regular leading-20 tracking-tight">
        {t("heroTitle")}
      </h1>
      <p className="font-coinbase-sans text-lg font-normal">
        {t("heroSubtitle")}
      </p>

      <form action={()=>console.log(email)}  className="w-full flex  justify-center items-center gap-4">
        <div className="w-3/4">
 <input
      value=""
      placeholder="satoshi@nakamoto.com"
      type="email"
      className="p-4 border border-(--coinbase-gray-1) w-full rounded-xl font-coinbase-sans text-black outline-none focus:ring-1 focus:ring-(--primary) placeholder:text-gray-500 "
    />
        </div>
    
    <Button primary>{t("signUp")}</Button>
      </form>
      </div>
      
    </section>
    <section className="min-h-screen bg-(--coinbase-gray-2) w-full flex justify-between items-center px-10 gap-12">
      <div className="w-1/2 flex flex-col justify-center items-start gap-5">
        <h2 className="text-[46px] leading-[1.1] font-regular font-coinbase-sans">Explore crypto like Bitcoin, Ethereum, and Dogecoin.</h2>
        <p className="font-coinbase-sans font-normal text-base text-gray-500">
         Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
        </p>
        <Button secondary>See more assets</Button>
      </div>
      <div className="w-1/2 flex justify-end">
        <MarketMoversCard />
      </div>
    </section>
       <section className="min-h-screen w-full flex justify-center items-center px-20 gap-14">
        <div className="w-1/2"> 
          <img src={Advanced} alt="" className="rounded-[60px]"/>
        </div>
      <div className="w-1/2 flex flex-col justify-center items-start gap-5">
        <h2 className="text-[42px] leading-[1.1] font-regular font-coinbase-sans">Powerful tools, designed for the advanced trader.</h2>
        <p className="font-coinbase-sans font-normal text-base text-gray-500">
         Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
        </p>
        <Button secondary>Start trading</Button>
      </div>
    </section>
       <section className="min-h-screen w-full flex flex-row-reverse justify-center items-center px-20 gap-14">
        <div className="w-1/2 h-auto bg-(--coinbase-gray-3) border border-(--coinbase-gray-1) rounded-[60px] flex flex-col justify-end items-center"> 
          <img src={ZeroFees} alt="" className="rounded-[60px] h-110"/>
        </div>
      <div className="w-1/2 flex flex-col justify-center items-start gap-5">
      <Tag children="coinbase one"/>
        <h2 className="text-[42px] leading-[1.1] font-regular font-coinbase-sans">Zero trading fees,<br/> more rewards .</h2>
        <p className="font-coinbase-sans font-normal text-base text-gray-500">
Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.        </p>
        <Button secondary>Claim free trial</Button>
      </div>
    </section>
       <section className="min-h-screen w-full flex justify-center items-center px-20 gap-14">
        <div className="w-1/2"> 
          <img src={BaseApp} alt="" className="rounded-[60px] border border-(--coinbase-gray-1)"/>
        </div>
      <div className="w-1/2 flex flex-col justify-center items-start gap-5">
      <Tag children="base app"/>
        <h2 className="text-[42px] leading-[1.1] font-regular font-coinbase-sans">Countless ways to earn crypto with the Base App.</h2>
        <p className="font-coinbase-sans font-normal text-base text-gray-500">
          An everything app to trade, create, discover, and chat, all in one place.        </p>
        <Button secondary>Learn more</Button>
      </div>
    </section>

 <section className="min-h-screen w-full flex flex-col justify-center  bg-(--coinbase-gray-2)  items-center px-20 py-24 gap-20">
        <div className="flex justify-center items-center gap-30"> 
<div className="w-1/2">
  <h2 className="text-[64px] leading-16">New to crypto? Learn some crypto basics</h2>
</div>
        
          <div className="w-1/2 flex flex-col justify-center items-start gap-5">
              <p className="text-xl text-gray-600">
                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
              </p>
              <Button secondary>Read More</Button>
          </div>
        </div>
      <div className="grid grid-cols-3 place-items-center gap-10" >
        {
          homeArticlesSection.map((article)=>(
           
            <article key={article.href}>
          <a href={article.href}  className="flex flex-col justify-center items-start gap-4 group">
  <img src={article.img} alt={article.alt} className="rounded-[40px]  aspect-video object-cover"/>
            
            
              <h3 className="text-[32px] w-4/5 leading-9 group-hover:underline">{article.title}</h3>
              <p className="line-clamp-3 text-gray-600">{article.subtext}</p>
              </a>
              </article>
              
          ))
        }
      </div>
    </section>
     <section className='flex w-full justify-between gap-14 items-center min-h-screen bg-white px-10'>
     
      
      <div className="w-1/2 flex flex-col justify-center items-start gap-5">
      <h1 className="text-[80px] font-coinbase-sans font-regular leading-20 tracking-tight">
        {t("takeControlTitle")}
      </h1>
      <p className="font-coinbase-sans text-lg text-gray-600 font-normal">
       {t("takeControlSubtitle")}
      </p>

      <form action={()=>console.log(email)}  className="w-full flex  justify-center items-center gap-4">
        <div className="w-3/4">
 <input
      value=""
      placeholder="satoshi@nakamoto.com"
      type="email"
      className="p-4 border border-(--coinbase-gray-1) w-full rounded-xl font-coinbase-sans text-black outline-none focus:ring-1 focus:ring-(--primary) placeholder:text-gray-500 "
    />
        </div>
    
    <Button primary>{t("signUp")}</Button>
      </form>
      </div>
       <div className="w-1/2 flex flex-col justify-center items-start gap-2">
<img src={Image} alt='' className='rounded-[4rem]'/>

      </div>
      
    </section>
    <section className="flex flex-col justify-center items-center text-center gap-5 px-20 py-10">
        <p className="text-xs text-gray-600">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>
        <p className="text-xs text-gray-600 w-3/4">
         Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
        </p>
    </section>
   </div>
    </div>
  )
}

export default Home
