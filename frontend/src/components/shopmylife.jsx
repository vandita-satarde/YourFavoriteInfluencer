import ItemCard from './ItemCard';
import Navbar from "./navbar";
import Footer from './footer';

import product1 from '../assets/products/Steamer.jpg';
import product2 from '../assets/products/packing-set.jpg';
import product3 from '../assets/products/diffuser.jpg';
import product4 from '../assets/products/journal.jpg';
import product5 from '../assets/products/glasses.jpg';
import product6 from '../assets/products/lamp.jpg';
import product7 from '../assets/products/mask.jpg';
import product8 from '../assets/products/roller.jpg';


const items = [
  // Travel Essentials
  {
    title: "Compact Travel Steamer",
    image: product1,
    description: "Wrinkle-free clothes on the go — no ironing board needed.",
    link: "https://www.amazon.in/PHILIPS-Handheld-Garment-STH3000-20/dp/B08TM71L54/ref=sr_1_5?crid=2XULI5TVRTRV1&dib=eyJ2IjoiMSJ9.pM5KHn72n2seoBGMBVw_rwPznFF7uUW-jfXWgfckGu31PxtS4B4tmGHTJzfXfPg_GET2ip0srBP0uWtzzL7d3b0JDA0bvmwny4BarSBF6mLSL2ru2tfD40tISR2UCnmzLLz6LyL0acxDBo3zd_NgTFvrp_u1LdwPguKc3Ru3-kod6NzyrkEgjbA5lCIOuQtZioBQQYnbjmFcpfcxoQS9aMPh7NRjz3T-Mpj287TdZfk.svVUXRCfCsACuBX3WY2E0AWIWSFNercA340mzDkp3Vo&dib_tag=se&keywords=compact%2Btravel%2Bsteamer&qid=1750158596&sprefix=compact%2Btravel%2Bsteamer%2Caps%2C253&sr=8-5&th=1",
  },
  {
    title: "Packing Cubes Set",
    image: product2,
    description: "Stay organized and fit more in your carry-on.",
    link: "https://www.amazon.in/Oceanevo-Packing-Luggage-Organizer-Toiletry/dp/B0CLGNL8LD/ref=sr_1_19?crid=8MBGQ34PI5CP&dib=eyJ2IjoiMSJ9.CbAN29B1VTzZ8IdaAdQGPB4TjjFpy2lXgrMezRKn55g6G0pBmWGYtLX52s5uiZ8_Ojc7u2OTMWwt3FOEhHAHMa7e8Vw_EWpxV3W4EJ32FT_KRGm5YTZc_T6QKEuB4hoy8LPVZLeVcE0kn_7kPusQmpridbphe5QK6m_YBGNv36e4BCEoF_WN3B9rlj3Nu8L99E3H_YyzLc0FBSuR3OmGQ8Z8LcTfmfqKbL_4iHtr7RoU-xlYcgluMbsMHf3ORbpZN0PV9J8eGBMWy-yVv7do6lDQGHBj_mXLn81YrA5SBLg.rr_6-_RaXQQdSY8_YMk0QtIGJqupyzoDYYXvGLoQjsI&dib_tag=se&keywords=packing%2Bcubes%2Bset&qid=1750158744&sprefix=packing%2Bcubes%2Bset%2Caps%2C264&sr=8-19&th=1"
  },

  // Home & Rituals
  {
    title: "Ceramic Oil Diffuser",
    image: product3,
    description: "Set the mood with essential oils — calm, focus, or sleep.",
    link: "https://www.amazon.in/Pure-Source-India-Operated-Diffuser/dp/B0B34ZX1WD/ref=sr_1_5?crid=1BZ1G12YGTRO7&dib=eyJ2IjoiMSJ9.XZp69PHi3gL_j_e6IGadfbmZErBHNZMtrrYt2DNK6UpUIkbzLWxPimfX6cHYy9fwacEIBAuKcoOAdipVG0XP9_sZQpIqFxoywf8juG5Vbv82nD2r3Mv4sUaiq-iEVT-1gsbTCBuZTaOCHl-HyHkoKcZ8uuePkf0aIMxuUL92GztdQYlt1XoJ56n0VIuXYqks58FYQ0cZCMltrCYxgChVd1fLygI6tjNWJ-ZF6mhEX7kntXTWBJdxIi-Je9OQ1z8y_lJ1SU8PUaWXhTbE8mYrfDO-IrborWOe3Mn-K7uQlE4.DGovFeBBuu0yCAnIN8bMBjgj9ZDeX6LLvIBsxO1aKH0&dib_tag=se&keywords=Ceramic%2Boil%2BDiffuser&qid=1750158877&sprefix=ceramic%2Boil%2Bdiffuser%2Caps%2C494&sr=8-5&th=1"
  },
  {
    title: "Mindful Morning Journal",
    image: product4,
    description: "Start your day with clarity and intention.",
    link: "https://www.amazon.in/dp/B08LSGD2V7/ref=syn_sd_onsite_desktop_0?ie=UTF8&pd_rd_plhdr=t&aref=NspNyAPFqh&th=1"
  },

  // Digital & Creative Tools
  {
    title: "Blue Light Glasses",
    image: product5,
    description: "Reduce eye strain while working on screens.",
    link: "https://www.amazon.in/LENSKART-BLU-Lightweight-Transparent-E13739/dp/B09D3F8M9K/ref=sr_1_4_sspa?dib=eyJ2IjoiMSJ9.XQ_ZpLgeYhpbdyqrWKLiRmLZE6bP1bysfzq328YYixox05Vj2kd8I_rqOc1rzVP34xpnIsRDl6hHnM6DkgKclTYvg1tx2l4BTKRu-MKxb1SP1ZL5ZWSW8pDal8VBEdFIapMGNdDGtUEGrMil9WZMxkWv37-HAgNYikNwInesNtrV2T8Kij6vJbu9zSGOGkV21hZrDveD2r_uYfOb5B2JnMxFcsNx6bPPzS5BH96qrs9ZqFhvdWtIsgSom2Q-3Oh761JWndMxjYKdvoqLlmQWrWRcQelmo5dmPYB22lZd9Ls.T6HvELv4wGZP1udexVGzU_lv5Ia1VIqH6_6aikl9QS4&dib_tag=se&keywords=blue%2Blight%2Bglasses&qid=1750159211&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1"
  },
  {
    title: "Desk Lamp with Warm Light",
    image: product6,
    description: "Create a cozy, focused workspace anywhere.",
    link: "https://www.amazon.in/WEIRD-WOLF-Colour-Holder-Warranty/dp/B0B919D52V/ref=sr_1_5?crid=VNK4WZ3NMPTR&dib=eyJ2IjoiMSJ9.FYEVIUU6dxXp8taIWHx-DHDyunrHx45wMLkikX9-Y6eW27HboM3ONPy5qlvVleKKYoCuyJBfbpGuVlW0ltvyxD7SQuBiCv7nUTKlMsq7GFSIf6GE_O-m9m5Qccv2ybgzleXUdANow_RCHOxmsGIa-VGB1I2UQ_My_fouI4twQ7zbEQqk-Tc3Uf7uDy2a93k6N0ywFfhCH8QQq1cw9NXpoppQIPutj5uqWrs4wwnas_YdpyZQXlIlLWozxon_VbNpCuUeQ5WQJOgc9HnLnb9D8kCWuT94VJZ3SCmID9mbD58._nE1waFpUWhaGWq2lRVQmvpSiAlPH4z5p-GzRolEVVQ&dib_tag=se&keywords=desk+lamp+with+warm+light&qid=1750159297&sprefix=desk+lamp+with+warm+light%2Caps%2C233&sr=8-5"
  },

  // Self-Care & Wellness
  {
    title: "Silk Sleep Mask",
    image: product7,
    description: "Block out light and slip into deeper rest  —  home or travel.",
    link: "https://www.amazon.in/GUBB-Satin-Ultra-Smooth-Sleep/dp/B0BNJHB5W6/ref=sr_1_8?crid=ANN7YHFV5Q6K&dib=eyJ2IjoiMSJ9.D9vh9NBqkalT1_qY0wWLL_kspUU_7TvCTUmVeu8tN0LjOvs7Tox8HODUIECEuQspM9yp52Z-UjFh4R85a5K3_zPL4W4o2SwL59MHjZ1pbyhgrC9MNNzvNqyqFQr726s4VFdcwhXNE3R77yG8HssNFQ4BrOAjvf3b1uAytJBrViDhgzu3H-_bMINxtnofW8-WuYyZJx4XoPtKmJ1heMl3LfkoM1il2tuZyHpMAIy-nhrPMwL6_epIMQs9tndE9eANCXyrBHc_R538bsnEwuxYxPVd4G3ckEClmA6AF6OnoaA.JOU8Dk4Gdo_W1E1IDZk0JJe52E_N9EAsIZ_tthsclYg&dib_tag=se&keywords=silk+eye+mask+for+sleeping&qid=1750160233&sprefix=Silk+Sleep+Mask%2Caps%2C414&sr=8-8"
  },
  {
    title: "Face Roller & Gua Sha Set",
    image: product8,
    description: "A soothing ritual for morning or night.",
    link: "https://www.amazon.in/SKINROTH-Anti-Aging-Original-Massager-V-Shape/dp/B0DKFPGHGX/ref=sr_1_2_sspa?crid=Z1MOWGIB6CT5&dib=eyJ2IjoiMSJ9.RCi0Co6lyrBZmQJJS40ILpsZ4T9AXFseRAotM2IcIpmMnPR27QlLeuTWw6-n99pCYVWOVJshQWAUjbaBrBxOL-VWY9AmpeUKufwbFUsehiHMngYFk6v7eaXeznBeSpfDcRycRMN_oG-_OMZ-xxqtRuqFHGadWIHinNpxpA4JEnqy_Uibz3-z3B9ceQmOU0_xVmL9dfRHBsucMIhvCrd2GLH-Hq_S-EW422cV6liJg8LQ__19htrIqjCoPq9clh1c2jX2zK3j2YWfwl1i138Uqe7hpd4XUG3DKS86QuTFgpo.mNsTeolsBOQEsszioIgPpL3QyYrRrel4ORcYyX88iY8&dib_tag=se&keywords=Face+Roller+%26+Gua+Sha+Set&qid=1750159552&sprefix=face+roller+%26+gua+sha+set%2Caps%2C396&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  },
];

const ShopMyLife = () => {
  return (
    <>
    <Navbar />
     <section className=" text-[#964e4e] bg-[#fcf2f2]">
      <h1 className=" text-2xl md:text-4xl lg:text-6xl pt-30 md:pt-40 lg:pt-40 mb-4 leading-tight text-[#fb7e7e] text-center ">Shop My Life</h1>

      <p className=" text-[10px] md:text-[16px] lg:text-[16px] text-[#b86f6f] max-w-2xl mx-10 md:mx-auto lg:mx-auto text-center mb-18">
        A collection of well-loved items that bring comfort, ease, and magic — from the road to slow mornings at home.
      </p>

      <p className="italic md:pt-15 lg:pt-16 text-center text-[10px] md:text-[17px] lg:text-[17px] ">“This made my life better.”</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 px-10 lg:p-6 max-w-6xl pb-40 mx-auto">
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div> 
    <Footer />
    </section>
    </>
  );
};

export default ShopMyLife;
