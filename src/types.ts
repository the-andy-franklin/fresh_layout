import {
  AppModule,
  ErrorPageModule,
  RouteModule,
  UnknownPageModule,
} from "https://deno.land/x/fresh@1.1.6/src/server/types.ts";
import { JSX, Manifest, PageProps } from "./deps.ts";

export type Page<Data = any> = (props?: PageProps<Data>) => JSX.Element;

export type Layout<Data = any> = (
  child: Page<Data>,
  props?: PageProps<Data>,
) => JSX.Element;

export interface PageModule {
  default?: Page;
}

export interface LayoutModule {
  default?: Layout;
}

export interface PageRouteInfo {
  path: string;
  module: RouteModule | PageModule | UnknownPageModule | ErrorPageModule;
}
export interface LayoutRouteInfo {
  path: string;
  module: LayoutModule;
}

export interface LayoutManifest extends Omit<Manifest, "routes"> {
  routes: Record<
    string,
    Manifest["routes"][string] | LayoutModule | PageModule
  >;
}
