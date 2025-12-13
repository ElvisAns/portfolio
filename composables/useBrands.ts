import kvoltslab from '~/assets/images/brands/kvoltslab.png'
import outliant from '~/assets/images/brands/outliant.jpg'
import blend360 from '~/assets/images/brands/blend360_logo.jpg'
import evoludata from '~/assets/images/brands/evoludata.png'
import myidealdental from '~/assets/images/brands/myidealdental.jpg'
import greenrack from '~/assets/images/brands/green_rack_solar_contracting_logo.jpg'
import premierpharma from '~/assets/images/brands/premier_pharma.svg'
import apollo from '~/assets/images/brands/appollo.webp'
import ctlco from '~/assets/images/brands/ctlcosarl.png'
import groupsupra from '~/assets/images/brands/group_supra.png'
import axeptio from '~/assets/images/brands/axeptio.png'
import gamedaymenshealth from '~/assets/images/brands/Gameday_Vector_Logo_-_Black_and_Red.jpg'
import ignitevisibility from '~/assets/images/brands/Ignite-Logo2.png'

export const useBrands = () => {
    const brands = [
        {
            name: 'Kilo Volts Lab',
            url: 'https://kvolts-lab.com',
            image: kvoltslab,
            whiteBg: false
        },
        {
            name: 'Outliant',
            url: 'https://outliant.com',
            image: outliant,
            whiteBg: false
        },
        {
            name: 'Blend360',
            url: 'https://blend360.com',
            image: blend360,
            whiteBg: false
        },
        {
            name: 'Evoludata',
            url: 'https://evoludata.com',
            image: evoludata,
            whiteBg: false
        },
        {
            name: 'My Ideal Dental',
            url: 'https://myidealdental.com',
            image: myidealdental,
            whiteBg: false
        },
        {
            name: 'Green Rack Solar Contracting',
            url: 'https://greenracksolar.com/',
            image: greenrack,
            whiteBg: false
        },
        {
            name: 'Premier Pharma',
            url: 'https://www.premierpharma.com/',
            image: premierpharma,
            whiteBg: true
        },
        {
            name: 'Apollo Theater',
            url: 'https://www.apollotheater.org/',
            image: apollo,
            whiteBg: true
        },
        {
            name: 'Ctlco',
            url: 'https://web.archive.org/web/20240104161504/https://ctlcosarl.com/',
            image: ctlco,
            whiteBg: true
        },
        {
            name: "Group Supra",
            url: "https://groupesupra.com",
            image: groupsupra,
            whiteBg: false
        },
        {
            name: 'Axeptio',
            url: 'https://www.axept.io/',
            image: axeptio,
            whiteBg: false
        },
        {
            name: 'Gameday Mens Health',
            url: 'https://gamedaymenshealth.com',
            image: gamedaymenshealth,
            whiteBg: false
        },
        {
            name: 'Ignite Visibility',
            url: 'https://ignitevisibility.com',
            image: ignitevisibility,
            whiteBg: false
        }
    ]

    return {
        brands
    }
} 