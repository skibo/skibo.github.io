const checkers2 = [
	0x01, 0x04, 0x20, 0x04, 0x0a, 0x00, 0x8f, 0x20,
	0x43, 0x48, 0x45, 0x43, 0x4b, 0x45, 0x52, 0x53,
	0x32, 0x21, 0x20, 0x42, 0x59, 0x20, 0x54, 0x4f,
	0x4d, 0x20, 0x53, 0x4b, 0x49, 0x42, 0x4f, 0x2e,
	0x00, 0x2c, 0x04, 0x14, 0x00, 0x9e, 0x28, 0x31,
	0x30, 0x37, 0x30, 0x29, 0x00, 0x00, 0x00, 0xa9,
	0x01, 0x85, 0x3d, 0xa9, 0x0c, 0x8d, 0x4c, 0xe8,
	0xa9, 0x70, 0xa0, 0x0c, 0x20, 0x21, 0x07, 0x20,
	0x11, 0x07, 0xa9, 0x93, 0x20, 0xd2, 0xff, 0x20,
	0xfc, 0x07, 0xa9, 0x9a, 0x85, 0x30, 0xa9, 0x0f,
	0x85, 0x31, 0x20, 0x25, 0x0a, 0x20, 0xb8, 0x08,
	0x20, 0xaf, 0x07, 0xa9, 0x41, 0x85, 0x30, 0xa9,
	0x83, 0x85, 0x31, 0x20, 0xe9, 0x05, 0x20, 0x87,
	0x07, 0xa5, 0x40, 0xf0, 0xee, 0xc9, 0x48, 0xf0,
	0x04, 0xc9, 0x3f, 0xd0, 0x14, 0x20, 0xed, 0x07,
	0x20, 0xfc, 0x07, 0xa9, 0x9a, 0x85, 0x30, 0xa9,
	0x0f, 0x85, 0x31, 0x20, 0xb8, 0x08, 0x4c, 0x5a,
	0x04, 0xc9, 0x51, 0xd0, 0x06, 0x20, 0x46, 0x07,
	0x4c, 0x5a, 0x04, 0xc9, 0x53, 0xf0, 0x25, 0x20,
	0x16, 0x06, 0xf0, 0x06, 0x20, 0xf7, 0x06, 0x4c,
	0x5a, 0x04, 0x20, 0x9a, 0x06, 0xf0, 0x06, 0x20,
	0x04, 0x07, 0x4c, 0x5a, 0x04, 0xa9, 0x9a, 0x85,
	0x30, 0xa9, 0x0f, 0x85, 0x31, 0x20, 0xb8, 0x08,
	0xa5, 0x2a, 0xd0, 0x9f, 0xa2, 0x05, 0xbd, 0x0e,
	0x0f, 0x9d, 0xe9, 0x80, 0xca, 0x10, 0xf7, 0xa9,
	0x9a, 0x85, 0x30, 0xa9, 0x0f, 0x85, 0x31, 0x20,
	0x39, 0x0c, 0xf0, 0x28, 0x20, 0x21, 0x05, 0x20,
	0x95, 0x07, 0xa4, 0x38, 0xa5, 0x39, 0x20, 0xf5,
	0x08, 0x20, 0xb8, 0x08, 0xa5, 0x37, 0xc9, 0xff,
	0xf0, 0x06, 0x20, 0xaf, 0x07, 0x4c, 0x5a, 0x04,
	0xa9, 0xea, 0xa0, 0x0e, 0xa2, 0x00, 0x20, 0x5a,
	0x07, 0x4c, 0x04, 0x05, 0xa9, 0xde, 0xa0, 0x0e,
	0xa2, 0x00, 0x20, 0x5a, 0x07, 0x20, 0xaf, 0x07,
	0x20, 0xaf, 0x07, 0x20, 0xaf, 0x07, 0xa9, 0x02,
	0xa0, 0x0f, 0xa2, 0x04, 0x20, 0x5a, 0x07, 0x20,
	0x36, 0x07, 0xd0, 0x03, 0x4c, 0x41, 0x04, 0x6c,
	0xfc, 0xff, 0x20, 0x9f, 0x05, 0xa5, 0x38, 0x18,
	0x69, 0x01, 0x85, 0x29, 0x20, 0x85, 0x05, 0x8d,
	0xe9, 0x80, 0xa5, 0x28, 0x8d, 0xea, 0x80, 0xa9,
	0x2d, 0x8d, 0xeb, 0x80, 0xa5, 0x39, 0x85, 0x2b,
	0x29, 0x03, 0x85, 0x2a, 0xd0, 0x1b, 0xa5, 0x2b,
	0x4a, 0x4a, 0x29, 0x03, 0xaa, 0xa5, 0x29, 0x18,
	0x7d, 0x5e, 0x0f, 0x85, 0x29, 0x20, 0x85, 0x05,
	0x8d, 0xec, 0x80, 0xa5, 0x28, 0x8d, 0xed, 0x80,
	0x60, 0xa5, 0x2b, 0x4a, 0x4a, 0x85, 0x2b, 0x29,
	0x03, 0xaa, 0xa5, 0x29, 0x18, 0x7d, 0x5e, 0x0f,
	0x18, 0x7d, 0x5e, 0x0f, 0x85, 0x29, 0xc6, 0x2a,
	0xd0, 0xe7, 0x20, 0x85, 0x05, 0x8d, 0xec, 0x80,
	0xa5, 0x28, 0x8d, 0xed, 0x80, 0x60, 0xa0, 0x00,
	0xc9, 0x0a, 0x90, 0x05, 0xe9, 0x0a, 0xc8, 0xd0,
	0xf7, 0x09, 0x30, 0x85, 0x28, 0xc0, 0x00, 0xd0,
	0x03, 0xa9, 0x20, 0x60, 0x98, 0x09, 0x30, 0x60,
	0xad, 0x40, 0xe8, 0x29, 0x20, 0xf0, 0xf9, 0xad,
	0x40, 0xe8, 0x29, 0x20, 0xd0, 0xf9, 0x60, 0x20,
	0xa6, 0x05, 0xa9, 0x66, 0x84, 0x28, 0x91, 0x30,
	0x20, 0x17, 0x07, 0x20, 0xe4, 0xff, 0xf0, 0xf8,
	0xc9, 0x0d, 0xf0, 0x1a, 0xc9, 0x14, 0xf0, 0x16,
	0xc9, 0x20, 0x90, 0xec, 0x48, 0x20, 0xa6, 0x05,
	0x68, 0x48, 0xc9, 0x40, 0x90, 0x02, 0x49, 0x40,
	0xa4, 0x28, 0x91, 0x30, 0x68, 0x60, 0x48, 0x20,
	0xa6, 0x05, 0xa9, 0x20, 0xa4, 0x28, 0x91, 0x30,
	0x68, 0x60, 0x20, 0xa6, 0x05, 0xa0, 0x06, 0xa9,
	0x20, 0x88, 0x91, 0x30, 0xd0, 0xfb, 0x20, 0xae,
	0x05, 0xc9, 0x0d, 0xf0, 0x14, 0xc9, 0x14, 0xd0,
	0x06, 0x88, 0x10, 0xf2, 0xc8, 0xf0, 0xef, 0xc0,
	0x06, 0xb0, 0xeb, 0x99, 0x40, 0x00, 0xc8, 0xd0,
	0xe5, 0xa9, 0x00, 0x99, 0x40, 0x00, 0x60, 0xa0,
	0x00, 0x84, 0x2a, 0xa5, 0x40, 0x38, 0xe9, 0x30,
	0xc9, 0x0a, 0xb0, 0x74, 0x85, 0x28, 0xc8, 0xb9,
	0x40, 0x00, 0xc9, 0x2d, 0xf0, 0x1f, 0x38, 0xe9,
	0x30, 0xc9, 0x0a, 0xb0, 0x63, 0x48, 0x06, 0x28,
	0xa5, 0x28, 0x0a, 0x0a, 0x65, 0x28, 0x85, 0x28,
	0x68, 0x65, 0x28, 0x85, 0x28, 0xc8, 0xb9, 0x40,
	0x00, 0xc9, 0x2d, 0xd0, 0x4b, 0xc6, 0x28, 0xa5,
	0x28, 0x20, 0x15, 0x0a, 0xd0, 0x42, 0xc8, 0xb9,
	0x40, 0x00, 0x38, 0xe9, 0x30, 0xc9, 0x0a, 0xb0,
	0x37, 0x85, 0x29, 0xc8, 0xb9, 0x40, 0x00, 0xc9,
	0x2d, 0xf0, 0x18, 0x38, 0xe9, 0x30, 0xc9, 0x0a,
	0xb0, 0x11, 0x48, 0x06, 0x29, 0xa5, 0x29, 0x0a,
	0x0a, 0x65, 0x29, 0x85, 0x29, 0x68, 0x65, 0x29,
	0x85, 0x29, 0xc8, 0xc6, 0x29, 0xa5, 0x29, 0x20,
	0x15, 0x0a, 0xd0, 0x0c, 0xb9, 0x40, 0x00, 0xc9,
	0x2d, 0xd0, 0x02, 0xe6, 0x2a, 0xa9, 0x00, 0x60,
	0xa9, 0x01, 0x60, 0xa4, 0x29, 0xb9, 0x9a, 0x0f,
	0xd0, 0x53, 0xa6, 0x28, 0xbd, 0x9a, 0x0f, 0x10,
	0x4c, 0xaa, 0x98, 0x38, 0xe5, 0x28, 0xe0, 0xfe,
	0xf0, 0x04, 0xc9, 0x00, 0x10, 0x3f, 0xa2, 0x07,
	0xdd, 0xce, 0x0e, 0xf0, 0x05, 0xca, 0x10, 0xf8,
	0x30, 0x33, 0xe0, 0x04, 0xb0, 0x06, 0xa5, 0x2a,
	0xd0, 0x2b, 0xf0, 0x15, 0x2a, 0x08, 0x6a, 0x28,
	0x6a, 0x18, 0x65, 0x28, 0xaa, 0xbd, 0x9a, 0x0f,
	0xc9, 0x01, 0x90, 0x19, 0xa9, 0x00, 0x9d, 0x9a,
	0x0f, 0xa6, 0x28, 0xbd, 0x9a, 0x0f, 0xc0, 0x08,
	0xb0, 0x02, 0xa9, 0xfe, 0x99, 0x9a, 0x0f, 0xa9,
	0x00, 0x9d, 0x9a, 0x0f, 0x60, 0xa9, 0x01, 0x60,
	0xa9, 0x14, 0xa0, 0x0f, 0xa2, 0x04, 0x20, 0x5a,
	0x07, 0x20, 0xd3, 0x07, 0x60, 0xa9, 0x20, 0xa0,
	0x0f, 0xa2, 0x04, 0x20, 0x5a, 0x07, 0x20, 0xd3,
	0x07, 0x60, 0x20, 0xe4, 0xff, 0xf0, 0xfb, 0x60,
	0xa5, 0x3d, 0x4a, 0x90, 0x02, 0x49, 0xb8, 0x85,
	0x3d, 0x60, 0x84, 0x31, 0x85, 0x30, 0xa0, 0x00,
	0xb1, 0x30, 0xf0, 0x0a, 0x20, 0xd2, 0xff, 0xc8,
	0xd0, 0xf6, 0xe6, 0x31, 0xd0, 0xf2, 0x60, 0xa9,
	0xbf, 0x85, 0x30, 0xa9, 0x83, 0x85, 0x31, 0xa0,
	0x00, 0x20, 0xae, 0x05, 0xc9, 0x59, 0x60, 0xa9,
	0xf6, 0xa0, 0x0e, 0xa2, 0x04, 0x20, 0x5a, 0x07,
	0x20, 0x36, 0x07, 0xf0, 0x03, 0x4c, 0x87, 0x07,
	0x4c, 0x04, 0x05, 0x85, 0x30, 0x84, 0x31, 0xbd,
	0xd6, 0x0e, 0x85, 0x32, 0xbd, 0xd7, 0x0e, 0x85,
	0x33, 0xa0, 0x05, 0xb1, 0x30, 0x91, 0x32, 0x88,
	0x10, 0xf9, 0xa0, 0x0b, 0xbd, 0xd8, 0x0e, 0x85,
	0x32, 0xbd, 0xd9, 0x0e, 0x85, 0x33, 0xb1, 0x30,
	0x91, 0x32, 0x88, 0xc0, 0x06, 0xb0, 0xf7, 0x60,
	0xa0, 0x06, 0xa9, 0x20, 0x99, 0x91, 0x83, 0x99,
	0xb9, 0x83, 0x88, 0x10, 0xf7, 0x60, 0xa9, 0x10,
	0x8d, 0x4b, 0xe8, 0xa9, 0x0f, 0x8d, 0x4a, 0xe8,
	0xa9, 0xfa, 0x8d, 0x48, 0xe8, 0xa9, 0xc8, 0x20,
	0x07, 0x0a, 0xa9, 0x00, 0x8d, 0x4b, 0xe8, 0x60,
	0xa9, 0x10, 0x8d, 0x4b, 0xe8, 0xa9, 0x0f, 0x8d,
	0x4a, 0xe8, 0xa9, 0xc8, 0x8d, 0x48, 0xe8, 0xa9,
	0x64, 0x20, 0x07, 0x0a, 0xa9, 0xfa, 0x8d, 0x48,
	0xe8, 0xa9, 0x64, 0x20, 0x07, 0x0a, 0xa9, 0x00,
	0x8d, 0x4b, 0xe8, 0x60, 0xa9, 0x10, 0x8d, 0x4b,
	0xe8, 0xa9, 0x03, 0x8d, 0x4a, 0xe8, 0xa9, 0xff,
	0x8d, 0x48, 0xe8, 0xa9, 0xf0, 0x20, 0x07, 0x0a,
	0xa9, 0x00, 0x8d, 0x4b, 0xe8, 0x60, 0xa9, 0x36,
	0xa0, 0x0d, 0x20, 0x21, 0x07, 0x20, 0x11, 0x07,
	0xa9, 0x93, 0x4c, 0xd2, 0xff, 0xa9, 0x00, 0x85,
	0x32, 0xa9, 0x80, 0x85, 0x33, 0xa9, 0x01, 0x85,
	0x2b, 0xa9, 0x08, 0x85, 0x28, 0x20, 0x9f, 0x05,
	0xa9, 0x03, 0x85, 0x29, 0xa9, 0x08, 0x85, 0x2a,
	0xa0, 0x00, 0xa5, 0x28, 0x45, 0x2a, 0x4a, 0xb0,
	0x0c, 0xa2, 0x04, 0xa9, 0x66, 0x91, 0x32, 0xc8,
	0xca, 0xd0, 0xfa, 0xf0, 0x2c, 0xa5, 0x29, 0xc9,
	0x03, 0xd0, 0x22, 0xa5, 0x2b, 0x4a, 0x4a, 0x4a,
	0x4a, 0xd0, 0x02, 0xa9, 0x10, 0x49, 0xb0, 0x91,
	0x32, 0xc8, 0xa5, 0x2b, 0x29, 0x0f, 0x09, 0xb0,
	0x91, 0x32, 0xc8, 0xa9, 0xa0, 0x91, 0x32, 0xc8,
	0x91, 0x32, 0xc8, 0xd0, 0x04, 0xc8, 0xc8, 0xc8,
	0xc8, 0xa5, 0x29, 0xc9, 0x03, 0xd0, 0x0b, 0x18,
	0x78, 0xf8, 0xa5, 0x2b, 0x69, 0x01, 0x85, 0x2b,
	0xd8, 0x58, 0xc6, 0x2a, 0xd0, 0xac, 0xa0, 0x20,
	0xa9, 0x61, 0x91, 0x32, 0x18, 0xa5, 0x32, 0x69,
	0x28, 0x85, 0x32, 0x90, 0x02, 0xe6, 0x33, 0xc6,
	0x29, 0xd0, 0x91, 0xc6, 0x28, 0xd0, 0x86, 0xa0,
	0x20, 0xa9, 0x7e, 0x91, 0x32, 0x88, 0xa9, 0xe2,
	0x91, 0x32, 0x88, 0x10, 0xfb, 0xa2, 0x04, 0xbd,
	0x2c, 0x0f, 0x9d, 0xc1, 0x80, 0xca, 0x10, 0xf7,
	0xa2, 0x04, 0xbd, 0x31, 0x0f, 0x9d, 0x19, 0x83,
	0xca, 0x10, 0xf7, 0xa2, 0x05, 0xa9, 0x44, 0x9d,
	0x11, 0x81, 0x9d, 0x69, 0x83, 0xca, 0x10, 0xf7,
	0x60, 0xa9, 0x3f, 0x85, 0x28, 0xa5, 0x28, 0x20,
	0x15, 0x0a, 0xd0, 0x2d, 0xa5, 0x28, 0x20, 0xda,
	0x09, 0xa4, 0x28, 0xb1, 0x30, 0x18, 0x69, 0x02,
	0x0a, 0x0a, 0x0a, 0xaa, 0x20, 0xa6, 0x05, 0xa0,
	0x28, 0xbd, 0x36, 0x0f, 0x91, 0x32, 0xe8, 0xc8,
	0xc0, 0x2c, 0x90, 0xf5, 0xa0, 0x50, 0xbd, 0x36,
	0x0f, 0x91, 0x32, 0xe8, 0xc8, 0xc0, 0x54, 0x90,
	0xf5, 0xc6, 0x28, 0x10, 0xc8, 0x60, 0x84, 0x2a,
	0x85, 0x2b, 0xa5, 0x2a, 0x20, 0x94, 0x09, 0xa5,
	0x2a, 0x20, 0x71, 0x09, 0xa5, 0x2b, 0x29, 0x03,
	0x85, 0x2c, 0xa5, 0x2b, 0x4a, 0x4a, 0x85, 0x2b,
	0x29, 0x03, 0xaa, 0xa5, 0x2a, 0x18, 0x7d, 0x5e,
	0x0f, 0x85, 0x2a, 0xa5, 0x2c, 0xd0, 0x05, 0xa5,
	0x2a, 0x4c, 0x52, 0x09, 0xa5, 0x2a, 0x20, 0x79,
	0x09, 0xa5, 0x2b, 0x29, 0x03, 0xaa, 0xa5, 0x2a,
	0x18, 0x7d, 0x5e, 0x0f, 0x85, 0x2a, 0xc6, 0x2c,
	0xd0, 0x03, 0x4c, 0x52, 0x09, 0x20, 0x71, 0x09,
	0xa5, 0x2b, 0x4a, 0x4a, 0x85, 0x2b, 0x29, 0x03,
	0xaa, 0xa5, 0x2a, 0x18, 0x7d, 0x5e, 0x0f, 0x85,
	0x2a, 0x10, 0xd1, 0x85, 0x28, 0xa9, 0x03, 0x85,
	0x29, 0xa9, 0x64, 0x20, 0x07, 0x0a, 0xa5, 0x28,
	0x20, 0x79, 0x09, 0xa9, 0x64, 0x20, 0x07, 0x0a,
	0xa5, 0x28, 0x20, 0xb7, 0x09, 0xc6, 0x29, 0xd0,
	0xe8, 0x60, 0x48, 0x20, 0x52, 0x09, 0x20, 0x07,
	0x0a, 0x68, 0x20, 0xda, 0x09, 0x20, 0x9f, 0x05,
	0xa0, 0x2b, 0xa9, 0x20, 0x91, 0x32, 0x88, 0xc0,
	0x28, 0xb0, 0xf9, 0xa0, 0x53, 0x91, 0x32, 0x88,
	0xc0, 0x50, 0xb0, 0xf9, 0x60, 0x20, 0xda, 0x09,
	0x20, 0x9f, 0x05, 0xa2, 0x07, 0xa0, 0x2b, 0xb1,
	0x32, 0x9d, 0xda, 0x0f, 0xca, 0x88, 0xc0, 0x28,
	0xb0, 0xf5, 0xa0, 0x53, 0xb1, 0x32, 0x9d, 0xda,
	0x0f, 0xca, 0x88, 0xc0, 0x50, 0xb0, 0xf5, 0x60,
	0x20, 0xda, 0x09, 0x20, 0x9f, 0x05, 0xa2, 0x07,
	0xa0, 0x2b, 0xbd, 0xda, 0x0f, 0x91, 0x32, 0xca,
	0x88, 0xc0, 0x28, 0xb0, 0xf5, 0xa0, 0x53, 0xbd,
	0xda, 0x0f, 0x91, 0x32, 0xca, 0x88, 0xc0, 0x50,
	0xb0, 0xf5, 0x60, 0x48, 0x29, 0x38, 0x85, 0x32,
	0x0a, 0x65, 0x32, 0x85, 0x32, 0x0a, 0x26, 0x33,
	0x0a, 0x26, 0x33, 0x18, 0x65, 0x32, 0x85, 0x32,
	0xa5, 0x33, 0x29, 0x03, 0x69, 0x00, 0x09, 0x80,
	0x85, 0x33, 0x68, 0x29, 0x07, 0x0a, 0x0a, 0x65,
	0x32, 0x85, 0x32, 0x90, 0x02, 0xe6, 0x33, 0x60,
	0x48, 0xa9, 0x8e, 0x38, 0xe9, 0x01, 0xd0, 0xfb,
	0x68, 0xe9, 0x01, 0xd0, 0xf3, 0x60, 0xc9, 0x40,
	0xb0, 0x09, 0x29, 0x09, 0xc9, 0x01, 0xf0, 0x02,
	0xc9, 0x08, 0x60, 0xa9, 0x01, 0x60, 0xa0, 0x3f,
	0x98, 0x20, 0x15, 0x0a, 0xd0, 0x10, 0xc0, 0x28,
	0x90, 0x04, 0xa9, 0xff, 0xd0, 0x0a, 0xc0, 0x18,
	0xb0, 0x04, 0xa9, 0x01, 0xd0, 0x02, 0xa9, 0x00,
	0x91, 0x30, 0x88, 0x10, 0xe3, 0x60, 0xa0, 0x3f,
	0xa2, 0x00, 0xb1, 0x30, 0x9d, 0x62, 0x10, 0xe8,
	0x88, 0x10, 0xf7, 0xa0, 0x3f, 0xa9, 0x00, 0x38,
	0xf9, 0x62, 0x10, 0x91, 0x30, 0x88, 0x10, 0xf5,
	0x60, 0xa0, 0x3f, 0xa9, 0x80, 0x18, 0x71, 0x30,
	0x88, 0x10, 0xfa, 0x60, 0x85, 0x2c, 0x46, 0x2c,
	0x46, 0x2c, 0x29, 0x03, 0x85, 0x2e, 0x84, 0x2d,
	0xb1, 0x30, 0x48, 0xa5, 0x2c, 0x29, 0x03, 0xaa,
	0x98, 0x18, 0x7d, 0x5e, 0x0f, 0xa8, 0xa5, 0x2e,
	0xd0, 0x07, 0x68, 0x91, 0x30, 0x98, 0xaa, 0x10,
	0x2f, 0xa9, 0x00, 0x91, 0x30, 0x98, 0x18, 0x7d,
	0x5e, 0x0f, 0xa8, 0x68, 0x91, 0x30, 0x48, 0x98,
	0xaa, 0xc6, 0x2e, 0xf0, 0x1a, 0xa4, 0x2d, 0xa9,
	0x00, 0x91, 0x30, 0x86, 0x2d, 0xa5, 0x2c, 0x4a,
	0x4a, 0x85, 0x2c, 0x29, 0x03, 0xaa, 0xa5, 0x2d,
	0x18, 0x7d, 0x5e, 0x0f, 0xa8, 0xd0, 0xd2, 0x68,
	0xa4, 0x2d, 0xa9, 0x00, 0x91, 0x30, 0xe0, 0x38,
	0x90, 0x06, 0x8a, 0xa8, 0xa9, 0x02, 0x91, 0x30,
	0xa4, 0x2d, 0xa9, 0x00, 0x91, 0x30, 0x60, 0xaa,
	0x84, 0x2c, 0xa0, 0x3f, 0xb1, 0x30, 0x99, 0x22,
	0x10, 0x88, 0x10, 0xf8, 0xa5, 0x30, 0x48, 0xa5,
	0x31, 0x48, 0xa9, 0x22, 0x85, 0x30, 0xa9, 0x10,
	0x85, 0x31, 0x8a, 0xa4, 0x2c, 0x20, 0x6b, 0x0a,
	0x20, 0x60, 0x0a, 0xc5, 0x3a, 0x90, 0x02, 0x85,
	0x3a, 0x68, 0x85, 0x31, 0x68, 0x85, 0x30, 0xa9,
	0x01, 0x60, 0x84, 0x3b, 0x85, 0x3c, 0xa0, 0x3f,
	0xb1, 0x30, 0x99, 0xe2, 0x0f, 0x88, 0x10, 0xf8,
	0xa5, 0x30, 0x48, 0xa5, 0x31, 0x48, 0x20, 0x17,
	0x07, 0xa9, 0xe2, 0x85, 0x30, 0xa9, 0x0f, 0x85,
	0x31, 0xa4, 0x3b, 0xa5, 0x3c, 0x20, 0x6b, 0x0a,
	0x20, 0x45, 0x0a, 0xa9, 0x00, 0x85, 0x3a, 0xa5,
	0x36, 0x48, 0xa5, 0x32, 0x48, 0xa5, 0x33, 0x48,
	0xa9, 0xd6, 0x85, 0x32, 0xa9, 0x0a, 0x85, 0x33,
	0x20, 0x81, 0x0b, 0x68, 0x85, 0x33, 0x68, 0x85,
	0x32, 0x68, 0x85, 0x36, 0xa9, 0xff, 0x38, 0xe5,
	0x3a, 0xc5, 0x37, 0xd0, 0x10, 0xa6, 0x3d, 0xe0,
	0x33, 0xb0, 0x16, 0xa6, 0x3b, 0x86, 0x38, 0xa6,
	0x3c, 0x86, 0x39, 0xb0, 0x0c, 0x90, 0x0a, 0x85,
	0x37, 0xa6, 0x3b, 0x86, 0x38, 0xa6, 0x3c, 0x86,
	0x39, 0x68, 0x85, 0x31, 0x68, 0x85, 0x30, 0xa9,
	0x01, 0x60, 0xa9, 0x00, 0x85, 0x36, 0xa9, 0x3f,
	0x85, 0x28, 0xa4, 0x28, 0xb1, 0x30, 0xc9, 0x01,
	0xf0, 0x07, 0xc9, 0x02, 0xf0, 0x03, 0x4c, 0x2b,
	0x0c, 0xa2, 0x0f, 0xc9, 0x02, 0xd0, 0x02, 0xa2,
	0x37, 0x86, 0x2a, 0xa6, 0x2a, 0xbd, 0x62, 0x0f,
	0x29, 0x03, 0x85, 0x2c, 0xbd, 0x62, 0x0f, 0x4a,
	0x4a, 0x85, 0x2b, 0x29, 0x03, 0xaa, 0xa5, 0x28,
	0x18, 0x7d, 0x5e, 0x0f, 0x85, 0x29, 0x20, 0x15,
	0x0a, 0xd0, 0x62, 0xa5, 0x2c, 0xd0, 0x08, 0xa4,
	0x29, 0xb1, 0x30, 0xd0, 0x58, 0xf0, 0x37, 0xa4,
	0x29, 0xb1, 0x30, 0xc9, 0xfe, 0x90, 0x4e, 0xa5,
	0x2b, 0x29, 0x03, 0xaa, 0xa5, 0x29, 0x18, 0x7d,
	0x5e, 0x0f, 0x85, 0x29, 0xa8, 0x20, 0x15, 0x0a,
	0xd0, 0x3b, 0xb1, 0x30, 0xd0, 0x37, 0xc6, 0x2c,
	0xf0, 0x14, 0xa5, 0x2b, 0x4a, 0x4a, 0x85, 0x2b,
	0x29, 0x03, 0xaa, 0xa5, 0x29, 0x18, 0x7d, 0x5e,
	0x0f, 0x85, 0x29, 0x4c, 0xce, 0x0b, 0xa5, 0x28,
	0xa8, 0x48, 0xa5, 0x2a, 0xaa, 0x48, 0xbd, 0x62,
	0x0f, 0x20, 0x36, 0x0c, 0xf0, 0x1e, 0x68, 0x85,
	0x2a, 0x68, 0x85, 0x28, 0xe6, 0x36, 0xa5, 0x36,
	0xc9, 0xff, 0xd0, 0x01, 0x60, 0xc6, 0x2a, 0x30,
	0x03, 0x4c, 0xa2, 0x0b, 0xc6, 0x28, 0x30, 0x03,
	0x4c, 0x89, 0x0b, 0x60, 0x68, 0x68, 0x60, 0x6c,
	0x32, 0x00, 0xa9, 0x00, 0x85, 0x37, 0xa9, 0x09,
	0x85, 0x32, 0xa9, 0x0b, 0x85, 0x33, 0x20, 0x81,
	0x0b, 0xa5, 0x36, 0xd0, 0x01, 0x60, 0xa4, 0x38,
	0xa5, 0x39, 0x20, 0x6b, 0x0a, 0xa9, 0x01, 0x60,
	0x20, 0x45, 0x0a, 0x20, 0x39, 0x0c, 0x08, 0x20,
	0x45, 0x0a, 0xa9, 0x3f, 0x38, 0xe5, 0x38, 0x85,
	0x38, 0xa5, 0x39, 0x49, 0xa8, 0x85, 0x39, 0x28,
	0x60, 0x93, 0x8e, 0x11, 0x11, 0x20, 0x20, 0x20,
	0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x43, 0x55,
	0x52, 0x53, 0x4f, 0x52, 0x20, 0x23, 0x35, 0x31,
	0x31, 0x20, 0x43, 0x48, 0x45, 0x43, 0x4b, 0x45,
	0x52, 0x53, 0x32, 0x21, 0x0d, 0x11, 0x20, 0x43,
	0x4f, 0x50, 0x59, 0x52, 0x49, 0x47, 0x48, 0x54,
	0x20, 0x28, 0x43, 0x29, 0x20, 0x32, 0x30, 0x32,
	0x33, 0x20, 0x20, 0x42, 0x59, 0x20, 0x54, 0x4f,
	0x4d, 0x20, 0x53, 0x4b, 0x49, 0x42, 0x4f, 0x0d,
	0x11, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0,
	0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0,
	0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0,
	0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0,
	0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0,
	0xc0, 0x0d, 0x50, 0x45, 0x54, 0x20, 0x50, 0x4c,
	0x41, 0x59, 0x53, 0x20, 0x54, 0x48, 0x45, 0x20,
	0x4f, 0x4c, 0x44, 0x20, 0x46, 0x41, 0x56, 0x4f,
	0x52, 0x49, 0x54, 0x45, 0x0d, 0x11, 0x11, 0x11,
	0x20, 0x20, 0x50, 0x52, 0x45, 0x53, 0x53, 0x20,
	0x12, 0x52, 0x45, 0x54, 0x55, 0x52, 0x4e, 0x92,
	0x20, 0x54, 0x4f, 0x20, 0x42, 0x45, 0x47, 0x49,
	0x4e, 0x0d, 0x0d, 0x0d, 0x0d, 0x42, 0x45, 0x54,
	0x41, 0x20, 0x52, 0x45, 0x4c, 0x45, 0x41, 0x53,
	0x45, 0x20, 0x4a, 0x55, 0x4e, 0x20, 0x32, 0x38,
	0x2c, 0x20, 0x32, 0x30, 0x32, 0x33, 0x00, 0x93,
	0x11, 0x11, 0x12, 0x48, 0x45, 0x4c, 0x50, 0x3a,
	0x92, 0x0d, 0x11, 0x4d, 0x4f, 0x56, 0x45, 0x20,
	0x50, 0x49, 0x45, 0x43, 0x45, 0x53, 0x20, 0x42,
	0x59, 0x20, 0x45, 0x4e, 0x54, 0x45, 0x52, 0x49,
	0x4e, 0x47, 0x20, 0x54, 0x48, 0x45, 0x20, 0x4e,
	0x55, 0x4d, 0x42, 0x45, 0x52, 0x20, 0x4f, 0x46,
	0x0d, 0x54, 0x48, 0x45, 0x20, 0x42, 0x45, 0x47,
	0x49, 0x4e, 0x4e, 0x49, 0x4e, 0x47, 0x20, 0x53,
	0x51, 0x55, 0x41, 0x52, 0x45, 0x2c, 0x20, 0x46,
	0x4f, 0x4c, 0x4c, 0x4f, 0x57, 0x45, 0x44, 0x20,
	0x42, 0x59, 0x20, 0x41, 0x0d, 0x44, 0x41, 0x53,
	0x48, 0x20, 0x28, 0x4d, 0x49, 0x4e, 0x55, 0x53,
	0x20, 0x53, 0x49, 0x47, 0x4e, 0x29, 0x2c, 0x20,
	0x41, 0x4e, 0x44, 0x20, 0x54, 0x48, 0x45, 0x20,
	0x4e, 0x55, 0x4d, 0x42, 0x45, 0x52, 0x20, 0x4f,
	0x46, 0x0d, 0x54, 0x48, 0x45, 0x20, 0x45, 0x4e,
	0x44, 0x49, 0x4e, 0x47, 0x20, 0x53, 0x51, 0x55,
	0x41, 0x52, 0x45, 0x2e, 0x20, 0x20, 0x46, 0x4f,
	0x52, 0x20, 0x45, 0x58, 0x41, 0x4d, 0x50, 0x4c,
	0x45, 0x3a, 0x20, 0x34, 0x37, 0x2d, 0x34, 0x30,
	0x2e, 0x0d, 0x11, 0x54, 0x4f, 0x20, 0x4d, 0x41,
	0x4b, 0x45, 0x20, 0x4d, 0x55, 0x4c, 0x54, 0x49,
	0x50, 0x4c, 0x45, 0x20, 0x4a, 0x55, 0x4d, 0x50,
	0x53, 0x2c, 0x20, 0x45, 0x4e, 0x54, 0x45, 0x52,
	0x20, 0x54, 0x48, 0x45, 0x20, 0x46, 0x49, 0x52,
	0x53, 0x54, 0x0d, 0x4a, 0x55, 0x4d, 0x50, 0x20,
	0x57, 0x49, 0x54, 0x48, 0x20, 0x41, 0x20, 0x54,
	0x52, 0x41, 0x49, 0x4c, 0x49, 0x4e, 0x47, 0x20,
	0x44, 0x41, 0x53, 0x48, 0x3a, 0x20, 0x34, 0x37,
	0x2d, 0x32, 0x39, 0x2d, 0x2e, 0x20, 0x20, 0x59,
	0x4f, 0x55, 0x0d, 0x57, 0x49, 0x4c, 0x4c, 0x20,
	0x54, 0x48, 0x45, 0x4e, 0x20, 0x42, 0x45, 0x20,
	0x50, 0x52, 0x4f, 0x4d, 0x50, 0x54, 0x45, 0x44,
	0x20, 0x54, 0x4f, 0x20, 0x45, 0x4e, 0x54, 0x45,
	0x52, 0x20, 0x54, 0x48, 0x45, 0x20, 0x4e, 0x45,
	0x58, 0x54, 0x0d, 0x4a, 0x55, 0x4d, 0x50, 0x20,
	0x53, 0x55, 0x43, 0x48, 0x20, 0x41, 0x53, 0x20,
	0x32, 0x39, 0x2d, 0x31, 0x35, 0x2e, 0x0d, 0x11,
	0x59, 0x4f, 0x55, 0x20, 0x43, 0x41, 0x4e, 0x20,
	0x53, 0x4b, 0x49, 0x50, 0x20, 0x41, 0x20, 0x4d,
	0x4f, 0x56, 0x45, 0x20, 0x42, 0x59, 0x20, 0x45,
	0x4e, 0x54, 0x45, 0x52, 0x49, 0x4e, 0x47, 0x20,
	0x27, 0x53, 0x27, 0x2e, 0x0d, 0x59, 0x4f, 0x55,
	0x20, 0x43, 0x41, 0x4e, 0x20, 0x51, 0x55, 0x49,
	0x54, 0x20, 0x41, 0x20, 0x47, 0x41, 0x4d, 0x45,
	0x20, 0x42, 0x59, 0x20, 0x45, 0x4e, 0x54, 0x45,
	0x52, 0x49, 0x4e, 0x47, 0x20, 0x27, 0x51, 0x27,
	0x2e, 0x0d, 0x11, 0x50, 0x52, 0x45, 0x53, 0x53,
	0x20, 0x12, 0x52, 0x45, 0x54, 0x55, 0x52, 0x4e,
	0x92, 0x20, 0x54, 0x4f, 0x20, 0x43, 0x4f, 0x4e,
	0x54, 0x49, 0x4e, 0x55, 0x45, 0x0d, 0x00, 0xf7,
	0xf9, 0x07, 0x09, 0xee, 0xf2, 0x0e, 0x12, 0xb1,
	0x81, 0xd3, 0x81, 0x91, 0x83, 0xb3, 0x83, 0x02,
	0x0c, 0x01, 0x03, 0x0b, 0x20, 0x17, 0x09, 0x0e,
	0x13, 0x21, 0x20, 0x17, 0x08, 0x09, 0x14, 0x05,
	0x20, 0x17, 0x09, 0x0e, 0x13, 0x21, 0x20, 0x12,
	0x05, 0x01, 0x0c, 0x0c, 0x19, 0x11, 0x15, 0x09,
	0x14, 0x3f, 0x20, 0x10, 0x0c, 0x01, 0x19, 0x20,
	0x20, 0x01, 0x07, 0x01, 0x09, 0x0e, 0x3f, 0x08,
	0x0d, 0x0d, 0x2c, 0x20, 0x20, 0x02, 0x01, 0x04,
	0x20, 0x20, 0x20, 0x09, 0x0e, 0x10, 0x15, 0x14,
	0x20, 0x09, 0x0c, 0x0c, 0x05, 0x07, 0x0c, 0x0d,
	0x0f, 0x16, 0x05, 0x20, 0x20, 0x97, 0x88, 0x89,
	0x94, 0x85, 0x02, 0x0c, 0x01, 0x03, 0x0b, 0x55,
	0x72, 0x72, 0x49, 0x4a, 0x71, 0x71, 0x4b, 0x55,
	0x40, 0x40, 0x49, 0x4a, 0x40, 0x40, 0x4b, 0x20,
	0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0xd5,
	0xc0, 0xc0, 0xc9, 0xca, 0xc0, 0xc0, 0xcb, 0xd5,
	0xf2, 0xf2, 0xc9, 0xca, 0xf1, 0xf1, 0xcb, 0x07,
	0x09, 0xf9, 0xf7, 0x00, 0x04, 0x01, 0x05, 0x02,
	0x06, 0x12, 0x16, 0x03, 0x07, 0x13, 0x17, 0x43,
	0x47, 0x53, 0x57, 0x08, 0x0c, 0x09, 0x0d, 0x0e,
	0x1a, 0x26, 0x2a, 0x2e, 0x32, 0x3a, 0x3e, 0x0f,
	0x1b, 0x33, 0x3b, 0x3f, 0x4f, 0x5b, 0x67, 0x6b,
	0x6f, 0x93, 0x97, 0x9b, 0xa7, 0xab, 0xaf, 0xb3,
	0xbb, 0xbf, 0xc3, 0xc7, 0xcf, 0xe7, 0xeb, 0xef,
	0xf3, 0xfb, 0xff
] // checkers2
