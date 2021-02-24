#pragma once

#include "../RandomX/src/randomx.h"
#include <napi.h>
#include <stdexcept>
#include <iostream>
#include <sstream>
#include <iomanip>
#include <algorithm>

typedef std::array<char, RANDOMX_HASH_SIZE> RandomxHash;

constexpr char hexmap[] = "0123456789abcdef";

inline std::string tohex(const char *data, size_t size)
{
  std::string hex;
  hex.resize(size * 2);
  for (unsigned i = 0; i < size; ++i)
  {
    hex[2 * i + 0] = hexmap[(data[i] & 0xF0) >> 4];
    hex[2 * i + 1] = hexmap[data[i] & 0x0F];
  }
  return hex;
}

class NrandomxVM : public Napi::ObjectWrap<NrandomxVM>
{
public:
  static void Init(Napi::Env env, Napi::Object exports);
  static Napi::Object NewInstance(Napi::Value arg);
  NrandomxVM(const Napi::CallbackInfo &info);
  randomx_vm *vm;

private:
  static Napi::FunctionReference constructor;
  Napi::Value GetValue(const Napi::CallbackInfo &info);
};
