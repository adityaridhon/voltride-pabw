"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  TrendingUp, 
  Users, 
  Search, 
  Plus,
  Pencil, 
  Trash2, 
  X,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sidebar } from "./sidebaradmin";
import { HeaderAdmin } from "./headeradmin";
import { createUser, updateUser, deleteUser } from "@/actions/user.actions";
import { useRouter } from "next/navigation";

// Form schemas
const createUserFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["ADMIN", "MITRA", "USER"]),
  phone: z.string().optional().or(z.literal("")),
});

const editUserFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  role: z.enum(["ADMIN", "MITRA", "USER"]),
  phone: z.string().optional().or(z.literal("")),
});

type CreateUserFormInput = z.infer<typeof createUserFormSchema>;
type EditUserFormInput = z.infer<typeof editUserFormSchema>;

interface UserType {
  id: string;
  name: string | null;
  email: string;
  role: "ADMIN" | "MITRA" | "USER";
  phone: string | null;
  createdAt: Date;
}

interface Props {
  initialUsers: UserType[];
  totalUsersCount: number;
  activeNowCount: number;
  newSignupsCount: number;
  chartData: {
    day: string;
    height: string;
    color: string;
    value: string;
  }[];
}

interface UserFormInput {
  name: string;
  email: string;
  password?: string;
  role: "ADMIN" | "MITRA" | "USER";
  phone?: string;
}

export function UserManagementClient({ 
  initialUsers, 
  totalUsersCount, 
  activeNowCount, 
  newSignupsCount,
  chartData
}: Props) {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormInput>({
    resolver: zodResolver(editingUser ? editUserFormSchema : createUserFormSchema) as any,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "USER",
      phone: "",
    },
  });

  // Open modal for add
  const handleAddOpen = () => {
    setEditingUser(null);
    reset({
      name: "",
      email: "",
      password: "",
      role: "USER",
      phone: "",
    });
    setShowModal(true);
  };

  // Open modal for edit
  const handleEditOpen = (user: UserType) => {
    setEditingUser(user);
    reset({
      name: user.name || "",
      email: user.email,
      role: user.role,
      phone: user.phone || "",
    });
    setShowModal(true);
  };

  // Close modal
  const handleClose = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  // Handle Delete
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        const res = await deleteUser(id);
        if (res && "error" in res) {
          throw new Error(res.error as string);
        }
        router.refresh();
      } catch (err: any) {
        alert(err.message || "Failed to delete user");
      }
    }
  };

  // Form Submit
  const onSubmit = async (data: any) => {
    try {
      if (editingUser) {
        const res = await updateUser({
          id: editingUser.id,
          name: data.name,
          email: data.email,
          role: data.role,
          phone: data.phone || undefined,
        });
        if (res && "error" in res) {
          throw new Error(res.error as string);
        }
      } else {
        const res = await createUser({
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role,
          phone: data.phone || undefined,
        });
        if (res && "error" in res) {
          throw new Error(res.error as string);
        }
      }
      handleClose();
      router.refresh();
    } catch (err: any) {
      alert(err.message || "Failed to save user info");
    }
  };

  // Filtered users list
  const filteredUsers = users.filter((u) => {
    const term = searchQuery.toLowerCase();
    return (
      (u.name?.toLowerCase().includes(term) || false) ||
      u.email.toLowerCase().includes(term) ||
      u.phone?.toLowerCase().includes(term) ||
      u.role.toLowerCase().includes(term)
    );
  });

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderAdmin title="Users Management" />
        
        <main className="flex-1 overflow-y-auto p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest mb-1">Manage Users</p>
                <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Users Management</h1>
              </div>
              <button 
                onClick={handleAddOpen}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Plus size={18} />
                Add User
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Customers</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> Live
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{totalUsersCount}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Active accounts with role USER</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Now</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1 items-center">
                    <Users size={12} /> {activeNowCount}
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{activeNowCount}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Current active rentals/bookings</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Signups</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> Live
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{newSignupsCount}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Joined in last 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conversion</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <CheckCircle2 size={12} /> 100%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">100%</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Active database connectivity verified</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Chart Section */}
            <Card className="p-8 border-none shadow-sm rounded-3xl bg-white">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">User Growth Velocity</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Aggregation of new account creations per day (Last 7 days)</p>
                </div>
              </div>

              <div className="h-[280px] flex items-end justify-between gap-3 px-4">
                {chartData.map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-4 group">
                    <div className="relative w-full flex flex-col items-center justify-end h-full">
                      <div 
                        className={`w-full rounded-t-xl ${bar.color} transition-all duration-500 hover:brightness-95 cursor-pointer shadow-sm relative group-hover:shadow-md`}
                        style={{ height: bar.height }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 shadow-lg z-20 whitespace-nowrap">
                          {bar.value} users
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{bar.day}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Table Section */}
            <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
              <div className="p-6 flex flex-wrap gap-4 items-center justify-between bg-white border-b border-slate-50">
                <div className="flex-1 min-w-[300px] relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search users by name, email, phone, role..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50/50 border-none hover:bg-slate-50/50">
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase py-6 px-8">User Identity</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Role</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Joined</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Status</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase text-right px-8">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((u) => {
                      const clientInitials = (u.name || u.email || "US").slice(0, 2).toUpperCase();
                      const joinDate = new Date(u.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      });

                      let roleLabel = "User Member";
                      if (u.role === "ADMIN") roleLabel = "System Admin";
                      if (u.role === "MITRA") roleLabel = "Showroom Partner";

                      return (
                        <TableRow key={u.id} className="border-b-slate-50 hover:bg-slate-50/30 transition-colors">
                          <TableCell className="py-6 px-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center shrink-0 font-bold text-slate-600 text-sm">
                                {clientInitials}
                              </div>
                              <div>
                                <p className="font-bold text-slate-800">{u.name || "VoltRide User"}</p>
                                <p className="text-xs text-slate-400 font-medium">{u.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-slate-100 text-slate-600 border-none font-bold text-[9px] uppercase px-2.5 py-0.5 rounded">
                              {roleLabel}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm font-medium text-slate-600">
                            {joinDate}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px]">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                            </div>
                          </TableCell>
                          <TableCell className="text-right px-8">
                            <div className="flex justify-end gap-2 text-slate-400">
                              <button 
                                onClick={() => handleEditOpen(u)}
                                className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-emerald-600"
                              >
                                <Pencil size={18} />
                              </button>
                              <button 
                                onClick={() => handleDelete(u.id)}
                                className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-red-500"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="py-8 text-center text-gray-500 text-sm">
                        No registered users found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Card>

          </div>
        </main>
      </div>

      {/* User Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">
                {editingUser ? "Edit User Info" : "Create New User"}
              </h3>
              <button 
                onClick={handleClose}
                className="p-1 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-6 space-y-6">
              <div>
                <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Name</label>
                <input 
                  type="text" 
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Email Address</label>
                <input 
                  type="email" 
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {!editingUser && (
                <div>
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Password</label>
                  <input 
                    type="password" 
                    {...register("password")}
                    placeholder="Min. 8 characters"
                    className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Role</label>
                  <div className="relative">
                    <select 
                      {...register("role")}
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm"
                    >
                      <option value="USER">User (Customer)</option>
                      <option value="MITRA">Mitra (Showroom)</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Phone</label>
                  <input 
                    type="text" 
                    {...register("phone")}
                    placeholder="08123456789"
                    className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors cursor-pointer text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-sm transition-colors cursor-pointer text-sm"
                >
                  {isSubmitting ? "Saving..." : editingUser ? "Save Changes" : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
