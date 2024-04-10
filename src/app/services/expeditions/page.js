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
    backgroundImage: `url('../../expeditions.jpg')`,
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

export default function ExpeditionsPage() {
    return (
        <PageContainer maxWidth='xl'>
            {/* <SimpleContainer>
                    <PageBox maxWidth='sm' sx={{ minHeight: '0', alignItems: 'start', paddingTop: '10px' }}>
                        <Link href={'/'}><Button variant='text' color='warning' size='large'>Home</Button></Link>
                    </PageBox>
                </SimpleContainer> */}
            <SimpleContainer>
                <PageBox maxWidth='sm'>
                    <h1>EXPEDITIONS</h1>
                    {/* <Box position={'relative'} height={'100%'} sx={{width: '90%', boxShadow: '10px 10px 10px black'}}>
                            <Image
                                fill
                                src="/expeditions-hero.jpg"
                                alt="expeditions"
                            />
                        </Box> */}

                    <h2>What is the Tribe Banua Expedition?</h2>
                    <p>Embark on a 3-day boat expedition from Linapacan to Culion, Palawan, where you'll be immersed in an array of unforgettable experiences. Snorkel amidst vibrant coral reefs, encountering a kaleidoscope of marine life. Visit remote tribe villages, engaging with locals, witnessing traditional dances, and learning about their customs. Navigate through mangrove forests on kayaks, exploring hidden lagoons and tranquil waterways. Spend nights in native houses, embracing the authentic charm of Palawan's culture. This expedition promises an extraordinary blend of adventure, cultural immersion, and natural beauty, making it an experience of a lifetime.</p>
                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h2>What to expect from this grand tour?</h2>
                    <p></p>
                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h2>Are you ready for the tour of a lifetime?</h2>
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
                        {/* <Link href='/pages/services/expeditions'>
                                <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../expeditions.jpg')` }}>
                                    <h2>EXPEDITIONS</h2>
                                </ItemBox>
                            </Link> */}
                        <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../island-tours.jpg')` }}>
                            <h2>ISLAND TOURS</h2>
                        </ItemBox>
                        <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../ferry-transfer.jpg')` }}>
                            <h2>FERRY TRANSFER</h2>
                        </ItemBox>
                        <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../van-transfer.jpg')` }}>
                            <h2>VAN TRANSFER</h2>
                        </ItemBox>
                    </SimpleStack>
                </PageBox>
            </SimpleContainer>
        </PageContainer>
    );
}