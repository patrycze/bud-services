import { ReactNode } from 'react';
import {IBaseHeaderProps} from "@/layouts/headers/base-header/base-header";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  header: ReactNode
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}
    <div className="mx-auto max-w-none">
      <div className="border-b border-gray-300">
        <div className="">
          {props.header}
        </div>
      </div>
      <div className="text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
