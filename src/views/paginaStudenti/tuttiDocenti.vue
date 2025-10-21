<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold text-gray-800">Teachers Data</h1>
      <button
        @click="addTeacher"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Add Teacher
      </button>
    </div>

    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search Teacher"
        class="w-full md:w-1/3 p-2 border rounded-md"
      />
    </div>

    <div class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full text-left text-gray-700">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-3 px-4">Profile</th>
            <th class="py-3 px-4">Subject</th>
            <th class="py-3 px-4">Department</th>
            <th class="py-3 px-4">D.O.B</th>
            <th class="py-3 px-4">Phone</th>
            <th class="py-3 px-4">Email</th>
            <th class="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="teacher in filteredTeachers"
            :key="teacher.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="py-3 px-4 flex items-center space-x-3">
              <img
                :src="teacher.avatar"
                alt="avatar"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <div class="font-semibold">{{ teacher.name }}</div>
                <div class="text-sm text-gray-500">ID: {{ teacher.employeeId }}</div>
              </div>
            </td>
            <td class="py-3 px-4">{{ teacher.subject }}</td>
            <td class="py-3 px-4">{{ teacher.department }}</td>
            <td class="py-3 px-4">{{ teacher.dob }}</td>
            <td class="py-3 px-4">{{ teacher.phone }}</td>
            <td class="py-3 px-4">{{ teacher.email }}</td>
            <td class="py-3 px-4 text-center space-x-3">
              <button class="text-blue-600 hover:text-blue-800">
                <i class="fas fa-eye"></i>
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="fas fa-pen"></i>
              </button>
              <button
                @click="deleteTeacher(teacher.id)"
                class="text-red-600 hover:text-red-800"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const teachers = ref([
  {
    id: 1,
    name: 'Mario Rossi',
    employeeId: 'TCH001',
    subject: 'Mathematics',
    department: 'Science',
    dob: '15/05/1985',
    phone: '+39 333 1234567',
    email: 'mario.rossi@school.it',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mario'
  },
  {
    id: 2,
    name: 'Laura Bianchi',
    employeeId: 'TCH002',
    subject: 'Italian Literature',
    department: 'Humanities',
    dob: '22/08/1990',
    phone: '+39 333 2345678',
    email: 'laura.bianchi@school.it',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Laura'
  },
  {
    id: 3,
    name: 'Giuseppe Verdi',
    employeeId: 'TCH003',
    subject: 'Physics',
    department: 'Science',
    dob: '10/03/1982',
    phone: '+39 333 3456789',
    email: 'giuseppe.verdi@school.it',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Giuseppe'
  },
  {
    id: 4,
    name: 'Anna Ferrari',
    employeeId: 'TCH004',
    subject: 'English',
    department: 'Languages',
    dob: '18/11/1988',
    phone: '+39 333 4567890',
    email: 'anna.ferrari@school.it',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Anna'
  }
])

const filteredTeachers = computed(() =>
  teachers.value.filter((t) =>
    t.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

function addTeacher() {
  alert('Add teacher clicked!')
}

function deleteTeacher(id) {
  teachers.value = teachers.value.filter((t) => t.id !== id)
}
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
}
th:first-child {
  border-top-left-radius: 0.5rem;
}
th:last-child {
  border-top-right-radius: 0.5rem;
}
</style>