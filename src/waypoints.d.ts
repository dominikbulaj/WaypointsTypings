// Type definitions for Waypoints
// Project: http://imakewebthings.com/waypoints/
// Definitions by: Dominik Bułaj <dominik@bulaj.com>
// Definitions: https://github.com/dominikbulaj/WaypointsTypings

interface WaypointOptions {
  element: HTMLElement,
  handler: (direction?: string) => void,
  offset?: string|number|(() => number),
  context?: HTMLElement,
  continuous?: boolean,
  enabled?: boolean,
  group?: string,
  horizontal?: boolean
}

declare class WaypointGroup {
  public first: () => Waypoint;
  public last: () => Waypoint;
  public name: string;
  public axis: string;
  public waypoints: Waypoint[];
}

declare class WaypointContext {
  public adapter: WaypointAdapter;
  public element: HTMLElement|Window;
  public waypoints: {horizontal: {}, vertical: {}}; // http://imakewebthings.com/waypoints/api/context/#waypoints-property
  public destroy: () => Waypoint;
  public refresh: () => Waypoint;
}

declare class WaypointAdapter {
  constructor(element: HTMLElement);
  public innerHeight(): number;
  public innerWidth(): number;
  public off(event: string): undefined;
  public offset(): {top: number, left: number};
  public on(event: string, handler: () => void): undefined;
  public outerHeight(includeMargin: boolean): number;
  public outerWidth(includeMargin: boolean): number;
  public scrollLeft(): number;
  public scrollTop(): number;
  public static extend(...objects): any;
  public static inArray(value: any, array: any[], startIndex: number);
  public static isEmptyObject(object: any): boolean;
}

declare class Waypoint {
  constructor(options: WaypointOptions);
  // properties
  public adapter: WaypointAdapter;
  public context: WaypointContext;
  public element: HTMLElement;
  public group: WaypointGroup;
  public options: WaypointOptions;
  public triggerPoint: number;

  // Instance Methods
  public destroy(): Waypoint;
  public disable(): Waypoint;
  public enable(): Waypoint;
  public next(): Waypoint | string; // actually `null` not string
  public previous(): Waypoint | string; // actually `null` not string
  // Class Methods
  public static destroyAll(): void;
  public static disableAll(): void;
  public static enableAll(): void;
  public static refreshAll(): void;
  public static viewportHeight(): number;
  public static viewportWidth(): number;
  public static adapters: {
    push: ({name: string, Adapter: WaypointAdapter})
  };
  public static Adapter: WaypointAdapter;
  // Waypoint.Context
  public static Context: {
    findByElement: (element: HTMLElement) => WaypointContext|undefined;
  };
  // Waypoint.Group
  public group: WaypointGroup;
}
