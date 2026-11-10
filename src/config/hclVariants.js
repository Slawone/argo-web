const platforms = [
  {
    title: "Гравитон/Graviton",
    href: "/partners/graviton/skh424a24bm/",
    text: "СХД / СХ424И24БМ-АР, ТСЦМ. 466539.006-01",
  },
  {
    title: "Гравитон/Graviton",
    href: "/partners/graviton/skh424i24bm-ar/",
    text: "СХД / СХ412И36БМ16Т-АР, ЕЦПТ.466539.012, ЕЦПТ.466539.012-05",
  },
  {
    title: "Гравитон/Graviton",
    text: "ПАК / \"ВАРЯ\" ПО-96.С2122ИУ-0, ТСЦМ.466539.010",
  },
  {
    title: "Гравитон/Graviton",
    text: "ПАК / \"ВАРЯ\" ПО-96.С2242ИУ-0, ТСЦМ.466539.010-01",
  },
  {
    title: "Норси Транс/NT",
    href: "/partners/norsitrans/tiara-a4/",
    text: "СХД / \"ТИАРА-А4\"",
  },
  {
    title: "Норси Транс/NT",
    href: "/partners/norsitrans/paladin-14/",
    text: "СХД / К-Р: ПАЛАДИН-14",
  },
  {
    title: "Норси Транс/NT",
    href: "/partners/norsitrans/paladin-212/",
    text: "СХД / К-Р: ПАЛАДИН-212",
  },
  {
    title: "Норси Транс/NT",
    href: "/partners/norsitrans/pantera-128/",
    text: "СХД / К-Р: ПАНТЕРА-128",
  },
  { title: "ДЕПО/DEPO", text: "СХД / DEPO 3412SC" },
  { title: "ДЕПО/DEPO", text: "СХД / DEPO 3436SLR" },
  { title: "ДЕПО/DEPO", text: "СХД / DEPO 3536DS" },
  { title: "ДЕПО/DEPO", text: "СХД / DEPO 3536G2" },
  {
    title: "ЮТИНЕТ/UTINET",
    text: "СХД / UTINET Prostor C024P; Prostor C040P; Prostor C120P; Prostor C0904P",
  },
  {
    title: "ЮТИНЕТ/UTINET",
    text: "СХД / UTINET Prostor 4132T; Prostor 4084T; Prostor 4048T; Prostor 4132A; Prostor 4084A; Prostor 4048A; Prostor 4024T",
  },
  { title: "ЮТИНЕТ/UTINET", text: "СХД / UTINET Prostor 8024B" },
  {
    title: "АМУР/AMUR",
    text: "Сервер AMUR TERRA A02R01 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R02 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R03 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R04 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R05 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R06 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R07 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R08 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R09 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R10 АМУЕ.466219.003ТУ; Сервер AMUR TERRA A02R11 АМУЕ.466219.003ТУ",
  },
  {
    title: "АМУР/AMUR",
    text: "Сервер AMUR LUNA B02R01 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R02 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R03 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R04 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R05 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R06 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R07 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R08 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R09 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R10 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R11 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R12 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R13 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R14 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R15 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R16 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R17 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R18 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R19 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B02R20 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B04R01 АМУЕ.466219.003ТУ; Сервер AMUR LUNA B04R02 АМУЕ.466219.003ТУ",
  },
];

const sasHba = [
  {
    name: "SAS3008",
    models:
      "ACD SAS9300-8i\nH5-25573-00\nH5-25460-00H / H3-25460-00H\nH5-25460-02H / H3-25460-02H\nACD 3008-8E\nH5-25460-00 (LSI00343)",
    chip: "Broadcom / LSI SAS3008 PCI-Express Fusion-MPT SAS-3",
  },
  {
    name: "ARC-1330-8i / Marvel 88SE1485",
    models: "ARC-1330-8i  ARC-1330-8x",
    chip: "Areca ARC-1330-8i",
  },
  {
    name: "SAS3408",
    models: "ACD SAS3408-8I\n05-50008-01\nACD 9400-8e\n05-50013-01 BULK\n05-50013-01007 / 03-50013-01007",
    chip: "Broadcom / LSI SAS3408 Fusion-MPT Tri-Mode I/O Controller Chip (IOC)",
  },
  {
    name: "SAS3416",
    models:
      "ACD 9400-16i\n05-50008-00012 / 03-50008-15005\n05-50008-00012 / 03-50008-15012\n05-50008-15012 / 03-50008-15012\nACD 9400-16e\n05-50013-00\n05-50013-15003\n05-50013-15007",
    chip: "Broadcom / LSI MegaRAID Tri-Mode SAS3416",
  },
  {
    name: "LSI Logic SAS3416 Fusion-MPT Tri-Mode I",
    models: "05-50008-00",
    chip: "LSI Logic / Symbios Logic Device",
  },
  {
    name: "Symbios Logic SAS3416 Fusion-MPT Tri-Mode",
    models:
      "LSI Logic / Symbios Logic Device\nLSI Logic / Symbios Logic SAS3416 Fusion-MPT Tri-Mode I/O Controller Chip (IOC)",
    chip: "LSI Logic / Symbios Logic Device\nLSI Logic / Symbios Logic SAS3416",
  },
  {
    name: "SAS3808",
    models: "05-50075-01001",
    chip: "Broadcom 9500-8e SGL",
  },
  {
    name: "SAS3816",
    models: "ACD 9500-16e\n05-50075-00001 / 03-50075-00001\n05-50075-00003 / 03-50075-00003",
    chip: "HBA 9500-16e",
  },
  {
    name: "LSI Logic / Symbios Logic Device [1000:00e6]",
    models: "Broadcom SAS 9500-8e (SPC3510130) (SAS3816)",
    chip: "LSI Logic / Symbios Logic Device [1000:4080]",
  },
  {
    name: "LSI Logic / Symbios Logic Device [1000:00e6]",
    models: "Broadcom SAS3816\n05-50077-02",
    chip: "LSI Logic / Symbios Logic Device",
  },
  {
    name: "Broadcom / LSI MegaRAID Tri-Mode SAS3516",
    models: "Broadcom SAS3516\nBroadcom MegaRAID 9460-16i",
    chip: "LSI MegaRAID Tri-Mode SAS3516",
  },
];

const ethernet = [
  {
    name: "LREC9802BT",
    models: "Intel Corporation Ethernet Controller 10-Gigabit X540-AT2",
    chip: "X540",
  },
  {
    name: "LREC9812BT",
    models: "Intel Corporation Ethernet Controller X550",
    chip: "X550AT2",
  },
  {
    name: "X550T2",
    models: "Intel Corporation Ethernet Controller 10G X550T",
    chip: "X550T",
  },
  {
    name: "LREC9804BT X710T4",
    models: "Intel Corporation Ethernet Controller X710 for 10GBASE-T",
    chip: "X710T4",
  },
  {
    name: "LREC9802BF-2SFP+ PE210G2SPI9A-XR",
    models: "Intel Corporation 82599ES 10 Gigabit Network Connection",
    chip: "82599EN/ES",
  },
  {
    name: "E10G42BTDA E10G42BFSR",
    models: "Intel Corporation Ethernet 10G 2P X520 Adapter",
    chip: "X520",
  },
  {
    name: "X710DA2BLK LREC9812BF-2SFP+",
    models: "Intel Corporation Ethernet Controller X710 for 10GbE SFP+",
    chip: "X710-DA2",
  },
  {
    name: "MCX4121A-XCAT",
    models: "Mellanox Technologies MT27710 Family [ConnectX-4 Lx]",
    chip: "MCX4121A-XCAT",
  },
  {
    name: "X710DA4G2P5",
    models: "Intel Corporation Ethernet Controller X710 for 10GbE SFP+",
    chip: "X710-DA4",
  },
  {
    name: "LRES1001PF-2SFP28 (XXV710)",
    models: "Intel Corporation Ethernet Controller XXV710 for 25GbE SFP28",
    chip: "LSI Logic / Symbios Logic Device",
  },
  {
    name: "MCX4121A-ACAT",
    models: "Mellanox Technologies MT27710 Family [ConnectX-4 Lx]",
    chip: "LSI MegaRAID Tri-Mode SAS3516",
  },
  {
    name: "MCX512A-ACAT",
    models: "Mellanox Technologies MT27800 Family [ConnectX-5]",
    chip: "",
  },
  {
    name: "MCX512A-ACAT",
    models: "Mellanox Technologies MT28800 Family [ConnectX-5 Ex]",
    chip: "",
  },
  {
    name: "MCX512A-CCAT",
    models: "Mellanox Technologies MT27800 Family [ConnectX-5]",
    chip: "",
  },
  {
    name: "MCX516A-CCAT",
    models: "Mellanox Technologies MT28800 Family [ConnectX-5 Ex]",
    chip: "MCX516A-CCAT",
  },
  {
    name: "MCX516A-CDAT",
    models: "Mellanox Technologies MT28800 Family [ConnectX-5 Ex]",
    chip: "",
  },
  {
    name: "MCX516A-CCAT",
    models: "Mellanox Technologies MT27800 Family [ConnectX-5]",
    chip: "",
  },
  {
    name: "MCX623106AN-CDAT",
    models: "Mellanox Technologies MT28841",
    chip: "",
  },
  {
    name: "LREC9902BF-2QSFP+",
    models: "Intel Corporation Ethernet Controller XL710 for 40GbE QSFP+",
    chip: "Intel Corporation Ethernet Converged Network Adapter XL710-Q2",
  },
];

const fibreChannel = [
  {
    name: "LPE16002B-M6",
    models: "Emulex Corporation LPe15000/LPe16000 Series 8Gb/16Gb Fibre Channel Adapter",
    chip: "LPE16002B",
  },
  {
    name: "LPE31002-AP",
    models: "Emulex Corporation LPe31000/LPe32000 Series 16Gb/32Gb Fibre Channel Adapter",
    chip: "LPE31002",
  },
  {
    name: "QLE2672-CK",
    models: "QLogic Corp. ISP8324-based 16Gb Fibre Channel to PCI Express Adapter",
    chip: "QLE2672",
  },
  {
    name: "LPE31004-M6",
    models: "Emulex Corporation LPe31000/LPe32000 Series 16Gb/32Gb Fibre Channel Adapter",
    chip: "LPE31004",
  },
  {
    name: "LPe32002-M2",
    models: "Emulex Corporation LPe31000/LPe32000 Series 16Gb/32Gb Fibre Channel Adapter",
    chip: "LPe32002",
  },
  {
    name: "LPE36002",
    models: "Emulex Corporation LPe35000/LPe36000 Series 32Gb/64Gb Fibre Channel Adapter",
    chip: "LPE36002",
  },
  {
    name: "CTFC-322",
    models: "ATTO Technology, Inc. Celerity FC 16/32Gb/s Gen 6 Fibre Channel HBA",
    chip: "FC-322E",
  },
  {
    name: "QLE2742-SR-CK",
    models: "QLogic Corp. QLE2742 Dual Port 32Gb Fibre Channel to PCIe Adapter",
    chip: "ISP2722-based 16/32Gb",
  },
  {
    name: "QLE2772-SR",
    models: "Qlogic QLE2772-SR-SP 32Gb/s FC HBA, 2-port, PCIe v4.0 x8",
    chip: "QLE2772",
  },
  {
    name: "CTFC-324",
    models: "ATTO Technology, Inc. Celerity FC 16/32Gb/s Gen 6 Fibre Channel HBA",
    chip: "FC-324E",
  },
  {
    name: "QLE2764-SR-CK",
    models: "QLogic Corp. ISP2722-based 16/32Gb Fibre Channel to PCIe Adapter",
    chip: "QLE2742",
  },
];

const infiniband = [
  {
    name: "MT25408A0-FCC-QI",
    models:
      "Mellanox Technologies MT25408A0-FCC-QI ConnectX, Dual Port 40Gb/s InfiniBand / 10GigE Adapter IC with PCIe 2.0 x8 5.0GT/s",
    chip: "MT25408A0-FCC-QI",
  },
];

const sasDisks = [
  { name: "Exos 7E8 / 7E10", models: "Seagate (3.5\", 7200 RPM)", chip: "" },
  { name: "Exos X10 / X16 / X24", models: "Seagate (3.5\", 7200 RPM)", chip: "" },
  { name: "Exos 10E2400", models: "Seagate (2.5\", 10 000 RPM)", chip: "" },
  {
    name: "DC HC300 Series",
    models: "Western Digital Ultrastar (3.5\", 7200 RPM)",
    chip: "",
  },
  {
    name: "DC HC550 / HC580",
    models: "Western Digital Ultrastar (3.5\", 7200 RPM)",
    chip: "",
  },
  { name: "MG Series", models: "Toshiba (3.5\", 7200 RPM)", chip: "MG08, MG09, MG10, MG11" },
  { name: "AL14SX / AL15SE", models: "Toshiba (2.5\", 10K/15K RPM)", chip: "" },
];

export const hclVariants = {
  platforms,
  sasHba,
  ethernet,
  fibreChannel,
  infiniband,
  sasDisks,
};
