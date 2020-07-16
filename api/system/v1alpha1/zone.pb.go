// Code generated by protoc-gen-go. DO NOT EDIT.
// source: system/v1alpha1/zone.proto

package v1alpha1

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Zone defines the Zone configuration used at the Global Control Plane
// within a distributed deployment
type Zone struct {
	RemoteControlPlane   *Zone_RemoteControlPlane `protobuf:"bytes,1,opt,name=remoteControlPlane,proto3" json:"remoteControlPlane,omitempty"`
	Ingress              *Zone_Ingress            `protobuf:"bytes,2,opt,name=ingress,proto3" json:"ingress,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *Zone) Reset()         { *m = Zone{} }
func (m *Zone) String() string { return proto.CompactTextString(m) }
func (*Zone) ProtoMessage()    {}
func (*Zone) Descriptor() ([]byte, []int) {
	return fileDescriptor_0b77e158d4963c0f, []int{0}
}

func (m *Zone) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Zone.Unmarshal(m, b)
}
func (m *Zone) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Zone.Marshal(b, m, deterministic)
}
func (m *Zone) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Zone.Merge(m, src)
}
func (m *Zone) XXX_Size() int {
	return xxx_messageInfo_Zone.Size(m)
}
func (m *Zone) XXX_DiscardUnknown() {
	xxx_messageInfo_Zone.DiscardUnknown(m)
}

var xxx_messageInfo_Zone proto.InternalMessageInfo

func (m *Zone) GetRemoteControlPlane() *Zone_RemoteControlPlane {
	if m != nil {
		return m.RemoteControlPlane
	}
	return nil
}

func (m *Zone) GetIngress() *Zone_Ingress {
	if m != nil {
		return m.Ingress
	}
	return nil
}

// Configure the Remote Control Plane
type Zone_RemoteControlPlane struct {
	// The public load balancer address of the Remote Control Plane KDS
	Address              string   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Zone_RemoteControlPlane) Reset()         { *m = Zone_RemoteControlPlane{} }
func (m *Zone_RemoteControlPlane) String() string { return proto.CompactTextString(m) }
func (*Zone_RemoteControlPlane) ProtoMessage()    {}
func (*Zone_RemoteControlPlane) Descriptor() ([]byte, []int) {
	return fileDescriptor_0b77e158d4963c0f, []int{0, 0}
}

func (m *Zone_RemoteControlPlane) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Zone_RemoteControlPlane.Unmarshal(m, b)
}
func (m *Zone_RemoteControlPlane) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Zone_RemoteControlPlane.Marshal(b, m, deterministic)
}
func (m *Zone_RemoteControlPlane) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Zone_RemoteControlPlane.Merge(m, src)
}
func (m *Zone_RemoteControlPlane) XXX_Size() int {
	return xxx_messageInfo_Zone_RemoteControlPlane.Size(m)
}
func (m *Zone_RemoteControlPlane) XXX_DiscardUnknown() {
	xxx_messageInfo_Zone_RemoteControlPlane.DiscardUnknown(m)
}

var xxx_messageInfo_Zone_RemoteControlPlane proto.InternalMessageInfo

func (m *Zone_RemoteControlPlane) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

// Configure the Zone's Ingress
type Zone_Ingress struct {
	// The public load balancer address of the Zone Ingress
	Address              string   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Zone_Ingress) Reset()         { *m = Zone_Ingress{} }
func (m *Zone_Ingress) String() string { return proto.CompactTextString(m) }
func (*Zone_Ingress) ProtoMessage()    {}
func (*Zone_Ingress) Descriptor() ([]byte, []int) {
	return fileDescriptor_0b77e158d4963c0f, []int{0, 1}
}

func (m *Zone_Ingress) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Zone_Ingress.Unmarshal(m, b)
}
func (m *Zone_Ingress) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Zone_Ingress.Marshal(b, m, deterministic)
}
func (m *Zone_Ingress) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Zone_Ingress.Merge(m, src)
}
func (m *Zone_Ingress) XXX_Size() int {
	return xxx_messageInfo_Zone_Ingress.Size(m)
}
func (m *Zone_Ingress) XXX_DiscardUnknown() {
	xxx_messageInfo_Zone_Ingress.DiscardUnknown(m)
}

var xxx_messageInfo_Zone_Ingress proto.InternalMessageInfo

func (m *Zone_Ingress) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func init() {
	proto.RegisterType((*Zone)(nil), "kuma.system.v1alpha1.Zone")
	proto.RegisterType((*Zone_RemoteControlPlane)(nil), "kuma.system.v1alpha1.Zone.RemoteControlPlane")
	proto.RegisterType((*Zone_Ingress)(nil), "kuma.system.v1alpha1.Zone.Ingress")
}

func init() { proto.RegisterFile("system/v1alpha1/zone.proto", fileDescriptor_0b77e158d4963c0f) }

var fileDescriptor_0b77e158d4963c0f = []byte{
	// 183 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2a, 0xae, 0x2c, 0x2e,
	0x49, 0xcd, 0xd5, 0x2f, 0x33, 0x4c, 0xcc, 0x29, 0xc8, 0x48, 0x34, 0xd4, 0xaf, 0xca, 0xcf, 0x4b,
	0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0xc9, 0x2e, 0xcd, 0x4d, 0xd4, 0x83, 0x28, 0xd0,
	0x83, 0x29, 0x50, 0xfa, 0xc1, 0xc8, 0xc5, 0x12, 0x95, 0x9f, 0x97, 0x2a, 0x14, 0xcb, 0x25, 0x54,
	0x94, 0x9a, 0x9b, 0x5f, 0x92, 0xea, 0x9c, 0x9f, 0x57, 0x52, 0x94, 0x9f, 0x13, 0x90, 0x93, 0x98,
	0x97, 0x2a, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x6d, 0xa4, 0xab, 0x87, 0x4d, 0xaf, 0x1e, 0x48, 0x9f,
	0x5e, 0x10, 0x86, 0xa6, 0x20, 0x2c, 0x06, 0x09, 0xd9, 0x70, 0xb1, 0x67, 0xe6, 0xa5, 0x17, 0xa5,
	0x16, 0x17, 0x4b, 0x30, 0x81, 0xcd, 0x54, 0xc2, 0x63, 0xa6, 0x27, 0x44, 0x65, 0x10, 0x4c, 0x8b,
	0x94, 0x1e, 0x97, 0x10, 0xa6, 0x3d, 0x42, 0x12, 0x5c, 0xec, 0x89, 0x29, 0x29, 0x60, 0x33, 0x41,
	0xee, 0xe4, 0x0c, 0x82, 0x71, 0xa5, 0x94, 0xb9, 0xd8, 0xa1, 0x66, 0xe0, 0x56, 0xe4, 0xc4, 0x15,
	0xc5, 0x01, 0xb3, 0x36, 0x89, 0x0d, 0x1c, 0x46, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0xe7,
	0x82, 0xab, 0x2e, 0x41, 0x01, 0x00, 0x00,
}
