import { Stack, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "./transys/Screenshot_2023-09-11-14-06-20-506_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-06-14-20-13-386_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-07-02-877_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-07-22-816_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-08-05-575_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-08-10-826_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-08-18-413_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-08-24-754_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-08-28-553_com.crm_app_transys.jpg",
  "./transys/Screenshot_2023-09-11-14-08-44-227_com.crm_app_transys.jpg ",
];

const imagesLpk = [
  "./lpk/Screenshot_2023-09-19-13-40-48-602_com.myapp.jpg",
  "./lpk/Screenshot_2023-09-19-13-41-10-127_com.myapp.jpg",
  "./lpk/Screenshot_2023-09-19-13-41-23-425_com.myapp.jpg",
  "./lpk/Screenshot_2023-09-19-13-41-35-292_com.myapp.jpg",
  "./lpk/Screenshot_2023-09-19-13-41-40-692_com.myapp.jpg",
  "./lpk/Screenshot_2023-09-19-13-41-49-503_com.myapp.jpg",
  "./lpk/Screenshot_2023-09-19-13-42-31-927_com.myapp.jpg",
  "./lpk/Screenshot_2023-09-19-13-44-17-260_com.myapp.jpg",
];
function App() {
  return (
    <>
      <Stack flexDirection={"row"}>
        <Box style={{ width: "25%" }}>
          <Carousel useKeyboardArrows={true}>
            {images.map((URL, index) => (
              <div className="slide">
                <img alt="" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </Box>
        <Box paddingLeft={20} style={{ width: "34%" }}>
          <Carousel useKeyboardArrows={true}>
            {imagesLpk.map((URL, index) => (
              <div className="slide">
                <img alt="" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </Box>
      </Stack>
    </>
  );
}
export default App;
