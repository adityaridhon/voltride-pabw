"use strict";
/**
 * Prisma Seed Script — Prisma v7 + Neon adapter
 * Jalankan dengan: npx prisma db seed
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var prisma_1 = require("../src/generated/prisma");
var adapter_neon_1 = require("@prisma/adapter-neon");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
// ─── Inisialisasi PrismaClient dengan Neon adapter (wajib di Prisma v7) ───────
var adapter = new adapter_neon_1.PrismaNeon({ connectionString: process.env.DATABASE_URL });
var prisma = new prisma_1.PrismaClient({ adapter: adapter });
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var adminPassword, admin, mitraPassword, mitraUser, mitra, armada1, armada2, userPassword, regularUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("🌱 Memulai seeding...");
                    return [4 /*yield*/, bcryptjs_1.default.hash("Admin@12345", 12)];
                case 1:
                    adminPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "admin@voltride.id" },
                            update: {},
                            create: {
                                name: "Super Admin",
                                email: "admin@voltride.id",
                                password: adminPassword,
                                role: "ADMIN",
                            },
                        })];
                case 2:
                    admin = _a.sent();
                    console.log("✅ Admin dibuat:", admin.email);
                    return [4 /*yield*/, bcryptjs_1.default.hash("Mitra@12345", 12)];
                case 3:
                    mitraPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "mitra@voltride.id" },
                            update: {},
                            create: {
                                name: "Budi Santoso",
                                email: "mitra@voltride.id",
                                password: mitraPassword,
                                role: "MITRA",
                                phone: "081234567890",
                            },
                        })];
                case 4:
                    mitraUser = _a.sent();
                    return [4 /*yield*/, prisma.mitra.upsert({
                            where: { userId: mitraUser.id },
                            update: {},
                            create: {
                                userId: mitraUser.id,
                                companyName: "EV Rental Budi",
                                phone: "081234567890",
                                address: "Jl. Sudirman No. 123, Jakarta",
                            },
                        })];
                case 5:
                    mitra = _a.sent();
                    // Buat dompet mitra
                    return [4 /*yield*/, prisma.wallet.upsert({
                            where: { userId: mitraUser.id },
                            update: {},
                            create: { userId: mitraUser.id, balance: 500000 },
                        })];
                case 6:
                    // Buat dompet mitra
                    _a.sent();
                    console.log("✅ Mitra dibuat:", mitraUser.email);
                    return [4 /*yield*/, prisma.mobil.upsert({
                            where: { plateNumber: "B 1234 EV" },
                            update: {},
                            create: {
                                mitraId: mitra.id,
                                name: "Tesla Model 3",
                                brand: "Tesla",
                                model: "Model 3",
                                plateNumber: "B 1234 EV",
                                status: "ACTIVE",
                                pricePerDay: 750000,
                            },
                        })];
                case 7:
                    armada1 = _a.sent();
                    return [4 /*yield*/, prisma.mobil.upsert({
                            where: { plateNumber: "B 5678 EV" },
                            update: {},
                            create: {
                                mitraId: mitra.id,
                                name: "BYD Atto 3",
                                brand: "BYD",
                                model: "Atto 3",
                                plateNumber: "B 5678 EV",
                                status: "ACTIVE",
                                pricePerDay: 500000,
                            },
                        })];
                case 8:
                    armada2 = _a.sent();
                    console.log("✅ Armada dibuat:", armada1.plateNumber, armada2.plateNumber);
                    return [4 /*yield*/, bcryptjs_1.default.hash("User@12345", 12)];
                case 9:
                    userPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "user@voltride.id" },
                            update: {},
                            create: {
                                name: "Ani Putri",
                                email: "user@voltride.id",
                                password: userPassword,
                                role: "USER",
                                phone: "089876543210",
                            },
                        })];
                case 10:
                    regularUser = _a.sent();
                    return [4 /*yield*/, prisma.wallet.upsert({
                            where: { userId: regularUser.id },
                            update: {},
                            create: { userId: regularUser.id, balance: 1000000 },
                        })];
                case 11:
                    _a.sent();
                    console.log("✅ User dibuat:", regularUser.email);
                    console.log("\n🎉 Seeding selesai!");
                    console.log("\n📋 Akun tersedia:");
                    console.log("  Admin  → admin@voltride.id   | Admin@12345");
                    console.log("  Mitra  → mitra@voltride.id   | Mitra@12345");
                    console.log("  User   → user@voltride.id    | User@12345");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error("❌ Seed gagal:", e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
