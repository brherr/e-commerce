import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;

`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === 'left' &&  '10px'};
    right: ${props=> props.direction === 'right' &&  '10px'};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%auto;
    display: flex;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

    }

    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper>
                <Slide bg='f5fafd'>
                    <ImgContainer>
                        <Image src='Images/Dress.jpg' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg='fcf1ed'>
                    <ImgContainer>
                        <Image src='Images/Dress.jpg' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg='fbf0f4'>
                    <ImgContainer>
                        <Image src='Images/Dress.jpg' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('left')}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
            
        </Container>
    )
}

export default Slider
