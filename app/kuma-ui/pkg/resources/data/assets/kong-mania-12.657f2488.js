const a="MeshInsight",t="kong-mania-12",e="0001-01-01T00:00:00Z",n="0001-01-01T00:00:00Z",l="2020-11-17T12:24:11.941534Z",o={total:0,partiallyDegraded:0},i={standard:{total:0,online:0,partiallyDegraded:0},gateway:{total:0,online:0,partiallyDegraded:0}},s={HealthCheck:{total:2},TrafficTrace:{total:1}},r={kumaDp:{"1.0.0-rc2":{total:1,online:1,partiallyDegraded:1},"1.0.4":{total:1,online:1,partiallyDegraded:1},unknown:{total:1,online:1,partiallyDegraded:1}},envoy:{"1.15.0":{total:2,online:2,partiallyDegraded:1},unknown:{total:1,online:1,partiallyDegraded:1}}},d={},c={total:0,internal:0,external:0},p={type:a,name:t,creationTime:e,modificationTime:n,lastSync:l,dataplanes:o,dataplanesByType:i,policies:s,dpVersions:r,mTLS:d,services:c};export{e as creationTime,o as dataplanes,i as dataplanesByType,p as default,r as dpVersions,l as lastSync,d as mTLS,n as modificationTime,t as name,s as policies,c as services,a as type};