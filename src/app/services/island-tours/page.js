'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SimpleContainer from '@/app/ui/layout/container';
import Divider from '@mui/material/Divider';
import ContactUs from '@/app/ui/sections/contactUs';
import Footer from '@/app/ui/sections/footer';
import FeaturedItems from '@/app/ui/layout/featured';
import Paper from '@mui/material/Paper';
import SimpleStack from '@/app/ui/layout/stack';
import Link from 'next/link';
import Button from '@mui/material/Button';

const PageContainer = styled(Container)(({ theme }) => ({
    padding: 0,
    width: '100%',
    justifyContent: 'center',
    backgroundImage: `url('../../island-tours.jpg')`,
    backgroundBlendMode: 'darken',
    backgroundColor: '#614e72',
    backgroundSize: 'cover',
    paddingTop: 60,
}));

const PageBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: 'transparent',
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'justify',
    color: 'white',
    width: '100%',
    marginLeft: '10px',
    marginRight: '10px',
    textShadow: '2px 2px 5px black',
}));

const ItemBox = styled(Paper)(({ theme }) => ({
    width: 'auto',
    height: '19vh',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'left',
    justifyContent: 'end',
    color: 'white',
    // textShadow: '2px 2px 5px white',
    cursor: 'pointer',
    borderRadius: '25px',
    marginLeft: '25px',
    marginRight: '25px',
    marginBottom: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    // borderLeft: '6px solid gray',
    boxShadow: '-2px 2px gray'
}));

export default function IslandToursPage() {
    return (
        <PageContainer maxWidth='xl'>
            {/* <SimpleContainer>
                    <PageBox maxWidth='sm' sx={{ minHeight: '0', alignItems: 'start', paddingTop: '10px' }}>
                        <Link href={'/'}><Button variant='text' color='warning' size='large'>Home</Button></Link>
                    </PageBox>
                </SimpleContainer> */}
            <SimpleContainer>
                <PageBox maxWidth='sm'>
                    <h1>ISLAND TOURS</h1>
                    {/* <Box position={'relative'} height={'100%'} sx={{width: '90%', boxShadow: '10px 10px 10px black'}}>
                            <Image
                                fill
                                src="/expeditions-hero.jpg"
                                alt="expeditions"
                            />
                        </Box> */}

                    <h2>Are you craving an escape into nature's embrace?</h2>
                    <p>Welcome to Tribe Banua's El Nido Island Tours, your gateway to the wonders of this tropical paradise! Our meticulously crafted tours offer an immersive experience, blending adventure with relaxation as you explore the stunning beauty of El Nido's islands. Picture yourself gliding through crystal-clear waters, surrounded by towering limestone cliffs and vibrant marine life. With our expert guides, you'll discover hidden lagoons, pristine beaches, and awe-inspiring snorkeling spots. Let Tribe Banua be your companion as you create cherished memories in one of the world's most enchanting destinations. Join us and unlock the treasures of El Nido's islands today!</p>
                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h2>The kind of tour for you.</h2>
                    <p>Each tour is designed to cater to all preferences, whether you seek adrenaline-pumping activities like cliff jumping or serene moments to bask in the sun's warm embrace. For more details, you can refer to the table below.</p>
                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h2>Ready to dive in?</h2>
                    <p>If you are, send us a message or connect with us thru our social accounts below.</p>
                    {/* <Divider sx={{borderColor:'white', width: '25%'}}></Divider> */}

                </PageBox>


            </SimpleContainer>
            <SimpleContainer><ContactUs></ContactUs></SimpleContainer>
            <SimpleContainer><Footer></Footer></SimpleContainer>
            <SimpleContainer><FeaturedItems ></FeaturedItems></SimpleContainer>

            <SimpleContainer>
                <PageBox maxWidth='sm' sx={{ textAlign: 'center', paddingTop: '0', justifyContent: 'start' }}>
                    <h2>SEE MORE OF OUR SERVICES</h2>
                    <SimpleStack>
                        <Link href='/services/expeditions'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../expeditions.jpg')` }}>
                                <h2>EXPEDITIONS</h2>
                            </ItemBox>
                        </Link>
                        {/* <Link href='/services/island-tours'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../island-tours.jpg')` }}>
                                <h2>ISLAND TOURS</h2>
                            </ItemBox>\
                        </Link> */}
                        <Link href='/services/ferry'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../ferry-transfer.jpg')` }}>
                                <h2>FERRY TRANSFER</h2>
                            </ItemBox>
                        </Link>
                        <Link href='/services/van'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../van-transfer.jpg')` }}>
                                <h2>VAN TRANSFER</h2>
                            </ItemBox>
                        </Link>
                    </SimpleStack>
                </PageBox>
            </SimpleContainer>
        </PageContainer>
    );
}