import { SliderImage } from "../../model/models";

interface SliderImageHandlerProps {
  sliderImage: SliderImage;
}

const SliderImageHandler = ({ sliderImage }: SliderImageHandlerProps) => (
  <img key={sliderImage.id} src={sliderImage.url || 'aaaaaaaa'} alt='random' />
);

export default SliderImageHandler;
