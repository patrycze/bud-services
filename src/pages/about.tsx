import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import {BaseHeader} from "@/layouts/headers/base-header/base-header";

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />} header={<BaseHeader/>}>

  </Main>
);

export default About;
