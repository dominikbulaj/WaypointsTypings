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
}

declare class WaypointContext {
  public destroy: () => Waypoint;
  public refresh: () => Waypoint;
}

declare class Waypoint {
  constructor(options: WaypointOptions);
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
  // Waypoint.Context
  public static Context: {
    findByElement: (element: HTMLElement) => WaypointContext;
  };
  // Waypoint.Group
  public group: WaypointGroup;
}
