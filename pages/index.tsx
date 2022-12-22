import {Button, Htag, Ptag, Rating, Tag} from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
    const [rat, setRating] = useState<number>(4);
  return (
    <>
        <Htag tag='h1'>Title</Htag>
        <Button appearance={'primary'} arrow='right'>Button</Button>
        <Button appearance={'ghost'} arrow='down'>Button</Button>
        <Ptag size={"l"}> Big</Ptag>
        <Ptag size={'m'}> Medium</Ptag>
        <Ptag size={'s'}> Little</Ptag>

        <Tag size={'s'} >Ghost</Tag>
        <Tag size={'m'} color={'red'}> Red</Tag>
        <Tag size={'s'} color={'green'}>Green</Tag>
        <Tag  color={'primary'}> Primary</Tag>
        <Rating rating={rat} isEditable setRating={setRating}/>
    </>
  );
}
