import { Instrument_Sans } from "next/font/google";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";
import ModalCart from "@/components/Modal/ModalCart";
import ModalWishlist from "@/components/Modal/ModalWishlist";
import ModalSearch from "@/components/Modal/ModalSearch";
import ModalQuickview from "@/components/Modal/ModalQuickview";
import ModalCompare from "@/components/Modal/ModalCompare";
import CountdownTimeType from "@/type/CountdownType";
import { countdownTime } from "@/store/countdownTime";
import { GoogleAnalytics } from "@next/third-parties/google";

const serverTimeLeft: CountdownTimeType = countdownTime();

const instrument = Instrument_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Artiva India",
    description:
        "Artiva's brand offers the most extensive selection of bathroom renovation and decor products. Our products are designed to give you the greatest experience possible when it comes to home improvement. Artiva is dedicated to helping our customers locate the ideal solution to meet their needs. We work hard to deliver high-quality products that are very affordable."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <GlobalProvider>
            <html lang="en">
                <body className={instrument.className}>
                    {children}
                    <ModalCart serverTimeLeft={serverTimeLeft} />
                    <ModalWishlist />
                    <ModalSearch />
                    <ModalQuickview />
                    <ModalCompare />
                </body>
                <GoogleAnalytics gaId="G-EJFP5QY377" />
            </html>
        </GlobalProvider>
    );
}
