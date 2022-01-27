import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export default function CustomerList() {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Customer Dashboard
                </h2>
            }>
            <Head>
                <title>Customer - Dashboard</title>
            </Head>
            {/*<Script*/}
            {/*    src="https://connect.facebook.net/en_US/sdk.js"*/}
            {/*    strategy="lazyOnload"*/}
            {/*    onLoad={() =>*/}
            {/*        console.log(`script loaded correctly, window.FB has been populated`)*/}
            {/*    }*/}
            {/*/>*/}
            <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
                <div className="w-full flex justify-between p-3">
                    <h2>
                        <Link href="/dashboard">
                            <a>Back to Dashboard</a>
                        </Link>
                    </h2>
                    <div className="flex">
                <h1>Customer List</h1>

                        <Image
                            priority
                            src="/images/profile.jpg"
                            class="w-full bg-cover"
                            height={144}
                            width={144}
                            alt={name}
                        />

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
