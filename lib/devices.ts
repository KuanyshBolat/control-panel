export interface Device {
  id: string
  name: string
  address1: string
  address2: string
  type: "normal" | "well"
  disabled?: boolean
  warning?: string
}

export interface DeviceSection {
  id: string
  title: string
  icon: string
  devices: Device[]
}

export const API_BASE = "http://10.1.23.20:8080"

export const sections: DeviceSection[] = [
  {
    id: "station",
    title: "Вокзал",
    icon: "train",
    devices: [
      { id: "0x11-0x10", name: "Свет вокзал улица", address1: "0x11", address2: "0x10", type: "normal" },
      { id: "0x11-0x11", name: "Свет вокзала", address1: "0x11", address2: "0x11", type: "normal" },
    ],
  },
  {
    id: "oil-depot",
    title: "Нефтебаза и водокачка",
    icon: "factory",
    devices: [
      { id: "0x12-0x10", name: "Свет нефтебаза", address1: "0x12", address2: "0x10", type: "normal" },
      { id: "0x12-0x11", name: "Водокачка", address1: "0x12", address2: "0x11", type: "normal" },
      { id: "0x12-0x12", name: "Свет водокачка", address1: "0x12", address2: "0x12", type: "normal" },
    ],
  },
  {
    id: "wells",
    title: "Скважины",
    icon: "droplets",
    devices: [
      { id: "0x12-0x20", name: "Скважина 1", address1: "0x12", address2: "0x20", type: "well" },
      { id: "0x12-0x21", name: "Скважина 2", address1: "0x12", address2: "0x21", type: "well" },
      { id: "0x12-0x22", name: "Скважина 3", address1: "0x12", address2: "0x22", type: "well", disabled: true, warning: "Не работает" },
    ],
  },
  {
    id: "hospital",
    title: "Больница",
    icon: "hospital",
    devices: [
      { id: "0x16-0x10", name: "Больница свет 1", address1: "0x16", address2: "0x10", type: "normal" },
      { id: "0x16-0x11", name: "Больница свет 2", address1: "0x16", address2: "0x11", type: "normal" },
      { id: "0x16-0x12", name: "Больница свет 3", address1: "0x16", address2: "0x12", type: "normal" },
      { id: "0x16-0x14", name: "Больница свет 4", address1: "0x16", address2: "0x14", type: "normal" },
      { id: "0x16-0x15", name: "Больница свет 5", address1: "0x16", address2: "0x15", type: "normal" },
      { id: "0x16-0x16", name: "Больница свет 6", address1: "0x16", address2: "0x16", type: "normal" },
    ],
  },
  {
    id: "fire-station",
    title: "Пожарная станция",
    icon: "flame",
    devices: [
      { id: "0x16-0x13", name: "Пожарная станция свет", address1: "0x16", address2: "0x13", type: "normal" },
    ],
  },
  {
    id: "stadium",
    title: "Стадион",
    icon: "trophy",
    devices: [
      { id: "0x13-0x11", name: "Свет стадион", address1: "0x13", address2: "0x11", type: "normal" },
      { id: "0x13-0x30", name: "Светофор стадион", address1: "0x13", address2: "0x30", type: "normal" },
      { id: "0x13-0x12", name: "Освещение улицы", address1: "0x13", address2: "0x12", type: "normal" },
    ],
  },
]
